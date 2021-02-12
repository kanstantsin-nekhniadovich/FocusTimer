import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { projectsReducer } from './reducer';

export * from './actions';
export * from './selectors';
export { projectsReducer } from './reducer';
export * from './epics';

export type ProjectsActions = ActionType<typeof actions>;
export type ProjectsReducer = typeof projectsReducer;
