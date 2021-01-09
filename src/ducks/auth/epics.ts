import { isActionOf } from 'typesafe-actions';
import { filter, map, mergeMap, pluck } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

import { handleResponse } from '../../utils/handleResponse';
import { loginFailure, loginRequest, loginSuccess } from './actions';

const loginEpic: AppEpic = (action$, _state$, { authService }) => {
  return action$.pipe(
    filter(isActionOf(loginRequest)),
    pluck('payload'),
    mergeMap(({ email, password }) => authService.login(email, password)),
    map(handleResponse),
    map(handler => handler(
      res => loginSuccess({ firebaseToken: res.data.firebaseToken, token: res.data.token, user: res.data.user }),
      res => loginFailure(res.error),
    )),
  );
};

export const authEpics = combineEpics(loginEpic);
