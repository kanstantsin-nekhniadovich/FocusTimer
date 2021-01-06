import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './ducks/root';
import { isDevEnv } from './utils/environment';

const epicMiddleware = createEpicMiddleware();

const enhancers = isDevEnv()
  ? composeWithDevTools(applyMiddleware(epicMiddleware))
  : applyMiddleware(epicMiddleware);

export const store = createStore(rootReducer, enhancers);
