import { combineReducers } from 'redux';

import { testReducer } from './test';

export const rootReducer = combineReducers<Store, AppActions>({
  test: testReducer
});
