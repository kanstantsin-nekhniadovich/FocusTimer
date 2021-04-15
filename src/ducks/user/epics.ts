import { isActionOf } from 'typesafe-actions';
import { combineEpics } from 'redux-observable';
import { from } from 'rxjs';
import { filter, mergeMap, pluck, map, tap } from 'rxjs/operators';

import {
  updateUserRequest,
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

import { showAlert } from '../../ducks';
import { getUser } from '../user/selectors';
import { saveAvatarToStorage } from '../../services/saveAvatarToStorage';
import { handleResponse } from '../../utils/handleResponse';
import { getItem, removeItem } from '../../services/storage';
import { signIn } from '../../services/firebase';
import { navigate } from '../../services/navigation';
import { logInWithReadPermissionsAsync, isSuccessLoginResult, requestUserData } from '../../services/facebook';
import { isDefined } from '../../utils/isDefined';
import { isEmpty } from '../../utils/isEmpty';
import { TOKEN, FIREBASE_TOKEN_KEY } from '../../utils/constants';
import { Routes } from '../../routes';

const createUserEpic: AppEpic = (action$, _state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(createUserRequest)),
    pluck('payload'),
    mergeMap(async (payload) => await userService.createUser(payload)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [createUserSuccess(res.data)],
      res => [showAlert({ message: res.error, type: 'error' }), createUserFailure(res.error)],
    )),
  );

const updateUserEpic: AppEpic = (action$, _state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(updateUserRequest)),
    pluck('payload'),
    mergeMap(async (payload) => await userService.updateUser(payload)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [updateUserSuccess(res.data), showAlert({ message: 'User info was updated successfully', type: 'success' })],
      res => [updateUserFailure(res.error), showAlert({ message: res.error, type: 'error' })],
    )),
  );

const navigateToAccountEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(updateUserSuccess)),
    tap(() => navigate(Routes.Account)),
  );

const saveUserAvatarEpic: AppEpic = (action$, state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(saveUserAvatarRequest)),
    pluck('payload'),
    mergeMap((url) => {
      const user = getUser(state$.value);

      return isDefined(user) ? saveAvatarToStorage(user.id, url) : '';
    }),
    filter((avatarUrl) => isDefined(avatarUrl) && !isEmpty(avatarUrl)),
    mergeMap(async avatarUrl => await userService.updateUser({ avatarUrl })),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [showAlert({ message: 'User photo was updated successfully', type: 'success' }), updateUserSuccess(res.data)],
      res => [showAlert({ type: 'error', message: res.error }), updateUserFailure(res.error)],
    )),
  );

const fetchUserDataEpic: AppEpic = (action$, _state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(fetchUserDataRequest)),
    pluck('payload'),
    mergeMap(async () => await getItem(TOKEN)),
    tap(token => isDefined(token) && signIn()),
    mergeMap(token => {
      if (!isDefined(token)) {
        return [fetchUserDataFailure(null)];
      }

      return from(userService.getUser()).pipe(
        map(handleResponse),
        mergeMap(async handler => await handler(
          res => fetchUserDataSuccess(res.data),
          async res => {
            await removeItem(TOKEN);
            await removeItem(FIREBASE_TOKEN_KEY);

            return fetchUserDataFailure(res.error);
          },
        )),
      );
    }),
  );

const createFacebookUserEpic: AppEpic = (action$, _state$, { userService }) =>
  action$.pipe(
    filter(isActionOf(createFacebookUserRequest)),
    mergeMap(async () => await logInWithReadPermissionsAsync()),
    filter(isSuccessLoginResult),
    mergeMap(async response => await requestUserData(response.token)),
    filter(isDefined),
    mergeMap(async data => {
      const { name, email, picture } = data;
      const avatarUrl = isDefined(picture) ? picture.data?.url : null;

      return await userService.createFacebookUser({ name, email, avatarUrl });
    }),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [createUserSuccess(res.data)],
      res => [showAlert({ message: res.error, type: 'error' }), createUserFailure(res.error)],
    )),
  );

export const userEpics = combineEpics(
  updateUserEpic,
  saveUserAvatarEpic,
  fetchUserDataEpic,
  createUserEpic,
  createFacebookUserEpic,
  navigateToAccountEpic,
);
