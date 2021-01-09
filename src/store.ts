import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, rootEpic } from './ducks';
import { services, Services } from './graphql/services';
import { isDevEnv } from './utils/environment';

const epicMiddleware = createEpicMiddleware<AppActions, AppActions, Store, Services>({
  dependencies: {
    ...services,
  },
});

const enhancers = isDevEnv()
  ? composeWithDevTools(applyMiddleware(epicMiddleware))
  : applyMiddleware(epicMiddleware);

export const store = createStore(rootReducer, enhancers);
epicMiddleware.run(rootEpic);
