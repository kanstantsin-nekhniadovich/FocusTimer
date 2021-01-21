import { combineEpics } from 'redux-observable';

import { authEpics } from './auth';
import { userEpics } from './user';

export const rootEpic = combineEpics(authEpics, userEpics);
