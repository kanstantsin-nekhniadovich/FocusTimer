import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, map } from 'rxjs/operators';

import { testRequest, testSuccess } from './actions';

const testEpic: AppEpic = action$ => {
  return action$.pipe(
    filter(isActionOf(testRequest)),
    map(({ payload }) => testSuccess(`Value from epic: ${payload}`)),
  );
};

export const testEpics = combineEpics(testEpic);
