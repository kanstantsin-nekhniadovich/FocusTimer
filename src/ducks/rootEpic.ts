import { combineEpics } from 'redux-observable';

import { testEpics } from './test';
import { authEpics } from './auth'; 

export const rootEpic = combineEpics(testEpics, authEpics);
