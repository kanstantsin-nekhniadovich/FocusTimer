import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './ducks/root';

const epicMiddleware = createEpicMiddleware();

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
