import { isActionOf } from 'typesafe-actions';
import { combineEpics } from 'redux-observable';
import { filter, mergeMap, pluck, map } from 'rxjs/operators';

import { updateUserRequest, updateUserSuccess, updateUserFailure } from './actions';
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

export const userEpics = combineEpics(updateUserEpic);
