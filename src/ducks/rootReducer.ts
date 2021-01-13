import { combineReducers } from 'redux';

import { testReducer } from './test';
import { authReducer } from './auth';

export const rootReducer = combineReducers<Store, AppActions>({
  auth: authReducer,
  test: testReducer,
});
