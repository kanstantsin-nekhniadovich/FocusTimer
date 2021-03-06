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

import { showAlert, resetProjects, getIsFacebookAuth } from '../';

import {
  facebookLogout,
  logInWithReadPermissionsAsync,
  requestUserData,
  isSuccessLoginResult,
} from '../../services/facebook';

import { handleResponse } from '../../utils/handleResponse';
import { createUserSuccess } from '../user';
import { storeItem, removeItem } from '../../services/storage';
import { client } from '../../graphql/client';
import { signIn, signOut } from '../../services/firebase';
import { navigate } from '../../services/navigation';
import { isDefined } from '../../utils/isDefined';
import { FIREBASE_TOKEN_KEY, TOKEN } from '../../utils/constants';
import { Routes } from '../../routes';

const loginEpic: AppEpic = (action$, _state$, { authService }) => {
  return action$.pipe(
    filter(isActionOf(loginRequest)),
    pluck('payload'),
    mergeMap(async ({ email, password }) => await authService.login(email, password)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [loginSuccess(res.data)],
      res => [showAlert({ message: res.error, type: 'error' }), loginFailure(res.error)],
    )),
  );
};

const postGettingUserDataEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(isActionOf([loginSuccess, createUserSuccess, facebookLoginSuccess])),
    pluck('payload'),
    tap(async ({ firebaseToken }) => await storeItem(FIREBASE_TOKEN_KEY, firebaseToken)),
    tap(async ({ token }) => await storeItem(TOKEN, token)),
    tap(() => navigate(Routes.Projects)),
    ignoreElements(),
  );
};

const signInFirebaseEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(isActionOf([loginSuccess, createUserSuccess, facebookLoginSuccess])),
    map(signIn),
    ignoreElements(),
  );
};

const signOutFirebaseEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(isActionOf(logoutRequest)),
    map(signOut),
    ignoreElements(),
  );
};

const logoutEpic: AppEpic = (action$, state$) => {
  return action$.pipe(
    filter(isActionOf(logoutRequest)),
    tap(async () => await removeItem(FIREBASE_TOKEN_KEY)),
    tap(async () => await removeItem(TOKEN)),
    tap(async () => await client.clearStore()),
    mergeMap(() => getIsFacebookAuth(state$.value)
      ? [facebookLogoutRequest(), resetProjects()]
      : [resetProjects()]
    ),
  );
};

const facebookLoginEpic: AppEpic = (action$, _state$, { authService }) =>
  action$.pipe(
    filter(isActionOf(facebookLoginRequest)),
    mergeMap(async () => await logInWithReadPermissionsAsync()),
    filter(isSuccessLoginResult),
    mergeMap(async response => await requestUserData(response.token)),
    filter(isDefined),
    mergeMap(async (data) => await authService.facebookLogin(data.email)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [facebookLoginSuccess(res.data)],
      () => [showAlert({ message: 'Authentication failed', type: 'error' }), facebookLoginFailure('Authentication failed')],
    )),
  );

const facebookLogoutEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(facebookLogoutRequest)),
    map(facebookLogout),
    ignoreElements(),
  );

export const authEpics = combineEpics(
  loginEpic,
  postGettingUserDataEpic,
  signInFirebaseEpic,
  logoutEpic,
  signOutFirebaseEpic,
  facebookLoginEpic,
  facebookLogoutEpic,
);
