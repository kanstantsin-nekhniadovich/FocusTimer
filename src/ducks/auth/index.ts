import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export * from './actions';
export * from './selectors';
export { authReducer } from './reducer';
export { authEpics } from './epics';

export type AuthActions = ActionType<typeof actions>;
