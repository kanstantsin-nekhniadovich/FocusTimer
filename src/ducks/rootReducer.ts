import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { userReducer } from './user';

export const rootReducer = combineReducers<Store, AppActions>({
  auth: authReducer,
  user: userReducer,
});
