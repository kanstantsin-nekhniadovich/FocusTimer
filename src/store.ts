import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './ducks/rootReducer';
import { rootEpic } from './ducks/rootEpic';
import { isDevEnv } from './utils/environment';

const epicMiddleware = createEpicMiddleware<AppActions, AppActions, Store, unknown>();

const enhancers = isDevEnv()
  ? composeWithDevTools(applyMiddleware(epicMiddleware))
  : applyMiddleware(epicMiddleware);

export const store = createStore(rootReducer, enhancers);
epicMiddleware.run(rootEpic);
