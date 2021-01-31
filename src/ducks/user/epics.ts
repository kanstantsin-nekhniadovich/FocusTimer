import { isActionOf } from 'typesafe-actions';
import { combineEpics } from 'redux-observable';
import { from } from 'rxjs';
import { filter, mergeMap, pluck, map, tap } from 'rxjs/operators';

import { updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  saveUserAvatarRequest,
  fetchUserDataRequest,
  fetchUserDataSuccess,
  fetchUserDataFailure,
  createUserRequest,
  createUserFailure,
  createUserSuccess,
  createFacebookUserRequest,
} from './actions';

import { showErrorAlert } from '../ui';
import { getUser } from '../user/selectors';
import { saveAvatarToStorage } from '../../services/saveAvatarToStorage';
import { handleResponse } from '../../utils/handleResponse';
import { getItem } from '../../services/storage';
import { signIn } from '../../services/firebase';
import { logInWithReadPermissionsAsync, isSuccessLoginResult, requestUserData } from '../../services/facebook';
import { isDefined } from '../../utils/isDefined';

const createUserEpic: AppEpic = (action$, _state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(createUserRequest)),
    pluck('payload'),
    mergeMap(async (payload) => userService.createUser(payload)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [createUserSuccess(res.data)],
      res => [showErrorAlert(res.error), createUserFailure(res.error)],
    )),
  );

const updateUserEpic: AppEpic = (action$, _state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(updateUserRequest)),
    pluck('payload'),
    mergeMap(async (payload) => userService.updateUser(payload)),
    map(handleResponse),
    map(handler => handler(
      res => updateUserSuccess(res.data),
      res => updateUserFailure(res.error),
    )),
  );

const saveUserAvatarEpic: AppEpic = (action$, state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(saveUserAvatarRequest)),
    pluck('payload'),
    mergeMap((url) => {
      const { id } = getUser(state$.value);

      return saveAvatarToStorage(id, url);
    }),
    mergeMap(async avatarUrl => userService.updateUser({ avatarUrl })),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [updateUserSuccess(res.data)],
      res => [showErrorAlert(res.error), updateUserFailure(res.error)],
    )),
  );

const fetchUserDataEpic: AppEpic = (action$, _state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(fetchUserDataRequest)),
    pluck('payload'),
    mergeMap(async () => await getItem('token')),
    tap(token => isDefined(token) && signIn()),
    mergeMap(token => {
      if (!isDefined(token)) {
        return [fetchUserDataFailure(null)];
      }

      return from(userService.getUser()).pipe(
        map(handleResponse),
        map(handler => handler(
          res => fetchUserDataSuccess(res.data),
          res => fetchUserDataFailure(res.error),
        )),
      );
    }),
  );

const createFacebookUserEpic: AppEpic = (action$, _state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(createFacebookUserRequest)),
    mergeMap(async () => logInWithReadPermissionsAsync()),
    filter(isSuccessLoginResult),
    mergeMap(async response => requestUserData(response.token)),
    filter(isDefined),
    mergeMap(async data => {
      const { name, email, picture } = data;
      const avatarUrl = isDefined(picture) ? picture.data?.url : null;

      return userService.createFacebookUser({ name, email, avatarUrl });
    }),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [createUserSuccess(res.data)],
      res => [showErrorAlert(res.error), createUserFailure(res.error)],
    )),
  );

export const userEpics = combineEpics(
  updateUserEpic,
  saveUserAvatarEpic,
  fetchUserDataEpic,
  createUserEpic,
  createFacebookUserEpic,
);
