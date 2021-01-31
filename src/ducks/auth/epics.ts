import { isActionOf } from 'typesafe-actions';
import { filter, map, mergeMap, pluck, tap, ignoreElements } from 'rxjs/operators';
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

import { showErrorAlert } from '../ui';

import {
  facebookLogout,
  logInWithReadPermissionsAsync,
  requestUserData,
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
    mergeMap(handler => handler(
      res => [loginSuccess(res.data)],
      res => [showErrorAlert(res.error), loginFailure(res.error)],
    )),
  );
};

const storeJwtTokenEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(isActionOf([loginSuccess, createUserSuccess, facebookLoginSuccess])),
    pluck('payload'),
    tap(async ({ firebaseToken }) => await storeItem(FIREBASE_TOKEN_KEY, firebaseToken)),
    tap(async ({ token }) => await storeItem('token', token)),
    ignoreElements(),
  );
};

const signInFirebaseEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(isActionOf([loginSuccess, createUserSuccess, facebookLoginSuccess])),
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

const facebookLoginEpic: AppEpic = (action$, _state$, { authService }) =>
  action$.pipe(
    filter(isActionOf(facebookLoginRequest)),
    mergeMap(async () => logInWithReadPermissionsAsync()),
    filter(isSuccessLoginResult),
    mergeMap(async response => requestUserData(response.token)),
    filter(isDefined),
    mergeMap(async (data) => authService.facebookLogin(data.email)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [facebookLoginSuccess(res.data)],
      () => [showErrorAlert('Authentication failed'), facebookLoginFailure('Authentication failed')],
    )),
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
