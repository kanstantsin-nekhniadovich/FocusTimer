import { combineEpics } from 'redux-observable';

import { testEpics } from './test';

export const rootEpic = combineEpics(testEpics);
