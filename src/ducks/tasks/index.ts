import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export * from './selectors';
export * from './epics';
export * from './actions';
export { tasksReducer } from './reducer';

export type TasksActions = ActionType<typeof actions>;
