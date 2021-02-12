import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { userReducer } from './user';
import { uiReducer } from './ui';
import { projectsReducer } from './projects';
import { tasksReducer } from './tasks';

export const rootReducer = combineReducers<Store, AppActions>({
  auth: authReducer,
  user: userReducer,
  ui: uiReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
});
