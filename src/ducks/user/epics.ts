import { isActionOf } from 'typesafe-actions';
import { combineEpics } from 'redux-observable';
import { filter, mergeMap, pluck, map } from 'rxjs/operators';

import { getUser } from '../user/selectors';
import { saveAvatarToStorage } from '../../services/saveAvatarToStorage';
import { updateUserRequest, updateUserSuccess, updateUserFailure, saveUserAvatarRequest } from './actions';
import { handleResponse } from '../../utils/handleResponse';

const updateUserEpic: AppEpic = (action$, _state$, { userService }) => {
  return action$.pipe(
    filter(isActionOf(updateUserRequest)),
    pluck('payload'),
    mergeMap(async (payload) => userService.updateUser(payload)),
    map(handleResponse),
    map(handler => handler(
      res => updateUserSuccess(res.data),
      res => updateUserFailure(res.error),
    )),
  );
};

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
    map(handler => handler(
      res => updateUserSuccess(res.data),
      res => updateUserFailure(res.error),
    )),
  );

export const userEpics = combineEpics(updateUserEpic, saveUserAvatarEpic);
