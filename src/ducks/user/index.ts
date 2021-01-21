import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { userReducer } from './reducer';

export * from './actions';
export { userReducer } from './reducer';
export * from './selectors';

export { userEpics } from './epics';
export type UserReducer = typeof userReducer;
export type UserActions = ActionType<typeof actions>;
