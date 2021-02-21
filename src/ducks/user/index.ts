import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export * from './actions';
export { userReducer } from './reducer';
export * from './selectors';

export { userEpics } from './epics';
export type UserActions = ActionType<typeof actions>;
