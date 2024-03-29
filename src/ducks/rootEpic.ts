import { combineEpics } from 'redux-observable';

import { authEpics } from './auth';
import { userEpics } from './user';
import { uiEpics } from './ui';
import { projectsEpic } from './projects';
import { tasksEpic } from './tasks';

export const rootEpic = combineEpics(authEpics, userEpics, uiEpics, projectsEpic, tasksEpic);
