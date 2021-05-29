import { isActionOf } from 'typesafe-actions';
import { filter, mergeMap, tap, map, pluck, switchMap } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

import {
  initApplicationRequest,
  initApplicationSuccess,
  setUserSkippedLoginFlowRequest,
  setUserSkippedLoginFlowSuccess,
  readUserSkippedLoginFlow,
} from './actions';

import { fetchUserDataRequest, fetchUserDataSuccess, fetchUserDataFailure } from '../user';
import { getItem, storeItem } from '../../services/storage';
import { initializeFacebook } from '../../services/facebook';
import { initializeFirebase, isFirebaseInitialized } from '../../services/firebase';
import { USER_SKIPPED_LOGIN_FLOW_KEY } from '../../utils/constants';
import { isDefined } from '../../utils/isDefined';

const initActions = [readUserSkippedLoginFlow, fetchUserDataRequest];
const fetchUserActions = [fetchUserDataSuccess, fetchUserDataFailure];

export const initApplicationRequestEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(initApplicationRequest)),
    map(async () => await initializeFacebook()),
    tap(() => !isFirebaseInitialized() && initializeFirebase()),
    mergeMap(() => initActions.map(action => action())),
  );

export const initApplicationSuccessEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(setUserSkippedLoginFlowSuccess)),
    switchMap(() => {
      return action$
        .pipe(
          filter(isActionOf(fetchUserActions)),
          map(() => initApplicationSuccess()),
        );
    }),
  );

export const getUserSkippedLoginFlowEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(readUserSkippedLoginFlow)),
    mergeMap(async () => await getItem<boolean>(USER_SKIPPED_LOGIN_FLOW_KEY)),
    map(isUserSkippedLoginFlow => setUserSkippedLoginFlowSuccess(isDefined(isUserSkippedLoginFlow) && isUserSkippedLoginFlow)),
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
