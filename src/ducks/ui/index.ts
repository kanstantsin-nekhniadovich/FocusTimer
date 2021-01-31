import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { uiReducer } from './reducer';

export * from './actions';
export * from './selectors';
export { uiReducer } from './reducer';
export { uiEpics } from './epics';

export type UiActions = ActionType<typeof actions>;
export type UiReducer = typeof uiReducer;
