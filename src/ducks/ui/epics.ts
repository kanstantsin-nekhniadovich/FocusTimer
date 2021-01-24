import { isActionOf } from 'typesafe-actions';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import firebase from 'firebase';

import { initApplication } from './actions';
import { fetchUserDataRequest } from '../user';
import { initializeFacebook } from '../../services/facebook';
import { initializeFirebase } from '../../services/firebase';

const initActions = [fetchUserDataRequest];

export const initApplicationEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(initApplication)),
    tap(async () => await initializeFacebook()),
    tap(() => firebase.apps.length === 0 && initializeFirebase()),
    mergeMap(() => initActions.map(action => action())),
  );

export const uiEpics = combineEpics(initApplicationEpic);
