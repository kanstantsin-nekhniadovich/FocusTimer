import { isActionOf } from 'typesafe-actions';
import { filter, mergeMap, tap, map, pluck, withLatestFrom } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

import {
  initApplicationRequest,
  initApplicationSuccess,
  setUserSkippedLoginFlowRequest,
  setUserSkippedLoginFlowSuccess,
  readUserSkippedLoginFlow,
} from './actions';

import { fetchUserDataRequest, fetchUserDataSuccess } from '../user';
import { getItem, storeItem } from '../../services/storage';
import { initializeFacebook } from '../../services/facebook';
import { initializeFirebase, isFirebaseInitialized } from '../../services/firebase';
import { USER_SKIPPED_LOGIN_FLOW_KEY } from '../../utils/constants';

const initActions = [readUserSkippedLoginFlow, fetchUserDataRequest];
const initSuccessActions = [setUserSkippedLoginFlowSuccess, fetchUserDataSuccess];

export const initApplicationRequestEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(initApplicationRequest)),
    map(async () => await initializeFacebook()),
    tap(() => !isFirebaseInitialized() && initializeFirebase()),
    mergeMap(() => initActions.map(action => action())),
  );

export const initApplicationSuccessEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(initSuccessActions)),
    withLatestFrom(),
    map(() => initApplicationSuccess()),
  );

export const getUserSkippedLoginFlowEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(readUserSkippedLoginFlow)),
    mergeMap(async () => await getItem(USER_SKIPPED_LOGIN_FLOW_KEY)),
    map(isUserSkippedLoginFlow => setUserSkippedLoginFlowSuccess(isUserSkippedLoginFlow === 'true')),
  );

export const setUserSkippedLoginFlowEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(setUserSkippedLoginFlowRequest)),
    pluck('payload'),
    tap(async (payload) => await storeItem(USER_SKIPPED_LOGIN_FLOW_KEY, payload)),
    map(isUserSkippedLoginFlow => setUserSkippedLoginFlowSuccess(isUserSkippedLoginFlow)),
  );

export const uiEpics = combineEpics(
  initApplicationRequestEpic,
  initApplicationSuccessEpic,
  getUserSkippedLoginFlowEpic,
  setUserSkippedLoginFlowEpic,
);
