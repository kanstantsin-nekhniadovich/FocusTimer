import { combineReducers } from 'redux';

import { testReducer } from './test';
import { authReducer } from './auth';

export const rootReducer = combineReducers<Store, AppActions>({
  test: testReducer,
  auth: authReducer,
});
