import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, rootEpic } from './ducks';
import { services } from './graphql/services';
import { isDevEnv } from './utils/environment';

const epicMiddleware = createEpicMiddleware<AppActions, AppActions, Store, Services>({
  dependencies: {
    ...services,
  },
});

const enhancers = isDevEnv()
  ? composeWithDevTools(applyMiddleware(epicMiddleware))
  : applyMiddleware(epicMiddleware);

export const configureStore = (initialState?: Partial<Store>) => {
  const store = createStore(rootReducer, initialState, enhancers);
  epicMiddleware.run(rootEpic);

  return store;
};
