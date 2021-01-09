import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { authReducer } from './reducer';

export * from './actions';
export { authReducer } from './reducer';
export { authEpics } from './epics';

export type AuthReducer = typeof authReducer;
export type AuthActions = ActionType<typeof actions>;
