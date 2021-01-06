import { ActionType, StateType } from 'typesafe-actions';
import { testReducer } from './reducer';
import * as actions from './actions';

export { testReducer } from './reducer';
export * from './selectors';
export * from './actions';
export * from './epics';

export type TestReducer = StateType<typeof testReducer>;
export type TestActions = ActionType<typeof actions>;
