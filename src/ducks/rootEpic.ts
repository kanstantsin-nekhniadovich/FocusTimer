import { combineEpics } from 'redux-observable';

import { authEpics } from './auth';
import { userEpics } from './user';
import { uiEpics } from './ui';

export const rootEpic = combineEpics(authEpics, userEpics, uiEpics);
