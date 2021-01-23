import { isActionOf } from 'typesafe-actions';
import { filter, mergeMap } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

import { initApplication } from './actions';
import { fetchUserDataRequest } from '../user';

const initActions = [fetchUserDataRequest];

export const initApplicationEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(initApplication)),
    mergeMap(() => initActions.map(action => action())),
  );

export const uiEpics = combineEpics(initApplicationEpic);
