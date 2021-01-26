import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import { filter, map, mergeMap, pluck, tap, ignoreElements, catchError } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutRequest,
  facebookLoginRequest,
  facebookLoginFailure,
  facebookLoginSuccess,
  facebookLogoutRequest,
} from './actions';

import {
  facebookLogout,
  logInWithReadPermissionsAsync,
  requestUserData,
  isFacebookUser,
  isSuccessLoginResult,
} from '../../services/facebook';

import { handleResponse } from '../../utils/handleResponse';
import { createUserSuccess } from '../user';
import { storeItem, removeItem } from '../../services/storage';
import { FIREBASE_TOKEN_KEY, signIn, signOut } from '../../services/firebase';
import { isDefined } from '../../utils/isDefined';

const loginEpic: AppEpic = (action$, _state$, { authService }) => {
  return action$.pipe(
    filter(isActionOf(loginRequest)),
    pluck('payload'),
    mergeMap(({ email, password }) => authService.login(email, password)),
    map(handleResponse),
    map(handler => handler(
      res => loginSuccess(res.data),
      res => loginFailure(res.error),
    )),
  );
};

const storeJwtTokenEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(isActionOf([loginSuccess, createUserSuccess])),
    pluck('payload'),
    tap(async ({ firebaseToken }) => await storeItem(FIREBASE_TOKEN_KEY, firebaseToken)),
    tap(async ({ token }) => await storeItem('token', token)),
    ignoreElements(),
  );
};

const signInFirebaseEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(isActionOf([loginSuccess, createUserSuccess])),
    tap(signIn),
    ignoreElements(),
  );
};

const signOutFirebaseEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(isActionOf(logoutRequest)),
    tap(signOut),
    ignoreElements(),
  );
};

const logoutEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(isActionOf(logoutRequest)),
    tap(async () => await removeItem(FIREBASE_TOKEN_KEY)),
    tap(async () => await removeItem('token')),
    ignoreElements(),
  );
};

const facebookLoginEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(facebookLoginRequest)),
    mergeMap(async () => logInWithReadPermissionsAsync()),
    filter(isSuccessLoginResult),
    mergeMap(async response => requestUserData(response.token)),
    map(data => {
      if (!isFacebookUser(data)) {
        return facebookLoginFailure('Authentication via facebook has failed');
      }
      
      const { name, email, id, picture } = data;
      const avatarUrl = isDefined(picture) ? picture.data.url : null;
      return facebookLoginSuccess({ name, email, id, avatarUrl });
    }),
    catchError(() => of(facebookLoginFailure('Authentication via facebook has failed'))),
  );

const facebookLogoutEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(facebookLogoutRequest)),
    tap(facebookLogout),
    ignoreElements(),
  );

export const authEpics = combineEpics(
  loginEpic,
  storeJwtTokenEpic,
  signInFirebaseEpic,
  logoutEpic,
  signOutFirebaseEpic,
  facebookLoginEpic,
  facebookLogoutEpic,
);
