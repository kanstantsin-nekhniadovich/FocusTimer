import { Task } from '@typings';
import { createReducer } from 'typesafe-actions';

import { fetchProjectsSuccess, resetProjects } from '../projects';
import { createTaskRequest, createTaskFailure, createTaskSuccess } from './actions';

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

export const handleCreateTaskRequest: ActionHandler<State, typeof createTaskRequest> = (state) => ({
  ...state,
  isLoading: true,
});

export const handleCreateTaskSuccess: ActionHandler<State, typeof createTaskSuccess> = (state, action) => {
  const task = action.payload;
  const projectTasks = state.tasks[task.project.id];

  return {
    isLoading: false,
    tasks: {
      ...state.tasks,
      [task.project.id]: [...projectTasks, task],
    }
  };
};

export const handleCreateTaskFailure: ActionHandler<State, typeof createTaskFailure> = (state) => ({
  ...state,
  isLoading: false,
});

export const tasksReducer = createReducer<State, AppActions>(initialState)
  .handleAction(fetchProjectsSuccess, handleSetTasks)
  .handleAction(resetProjects, handleResetTasks)
  .handleAction(createTaskRequest, handleCreateTaskRequest)
  .handleAction(createTaskSuccess, handleCreateTaskSuccess)
  .handleAction(createTaskFailure, handleCreateTaskFailure);
