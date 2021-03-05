import { Task } from '@typings';
import { createReducer } from 'typesafe-actions';

import { fetchProjectsSuccess, resetProjects } from '../projects';

interface State {
  tasks: Record<Id, Task[]>;
  isLoading: boolean;
}

const initialState: State = {
  tasks: {},
  isLoading: false,
};

export const handleSetTasks: ActionHandler<State, typeof fetchProjectsSuccess> = (state, action) => {
  const { projects } = action.payload;
  const tasks = projects.reduce((acc, current) => ({ ...acc, [current.id]: [...current.tasks] }), {});

  return { ...state, tasks: { ...state.tasks, ...tasks } };
};

export const handleResetTasks: ActionHandler<State, typeof resetProjects> = () => initialState;

export const tasksReducer = createReducer<State, AppActions>(initialState)
  .handleAction(fetchProjectsSuccess, handleSetTasks)
  .handleAction(resetProjects, handleResetTasks);
