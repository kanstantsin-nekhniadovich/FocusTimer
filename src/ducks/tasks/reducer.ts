import { Task } from '@typings';
import { createReducer } from 'typesafe-actions';

import { fetchProjectsSuccess, resetProjects, createProjectSuccess } from '../projects';

import {
  createTaskRequest,
  createTaskFailure,
  createTaskSuccess,
  deleteTaskFailure,
  deleteTaskSuccess,
  deleteTaskRequest
} from './actions';

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
  const projectTasks = state.tasks[task.projectId];

  return {
    isLoading: false,
    tasks: {
      ...state.tasks,
      [task.projectId]: [...projectTasks, task],
    }
  };
};

export const handleCreateTaskFailure: ActionHandler<State, typeof createTaskFailure> = (state) => ({
  ...state,
  isLoading: false,
});

export const handleDeleteTaskRequest: ActionHandler<State, typeof deleteTaskRequest> = (state) => ({
  ...state,
  isLoading: true,
});

export const handleDeleteTaskSuccess: ActionHandler<State, typeof deleteTaskSuccess> = (state, action) => {
  const { projectId, id } = action.payload;
  const tasks = state.tasks[projectId].filter((task) => task.id !== id);

  return {
    ...state,
    isLoading: false,
    tasks: { ...state.tasks, [projectId]: tasks },
  };
};

export const handleDeleteTaskFailure: ActionHandler<State, typeof deleteTaskFailure> = (state) => ({
  ...state,
  isLoading: false,
});

export const handleCreateProjectSuccess: ActionHandler<State, typeof createProjectSuccess> = (state, action) => {
  return {
    ...state,
    tasks: { ...state.tasks, [action.payload.id]: [] },
  };
};

export const tasksReducer = createReducer<State, AppActions>(initialState)
  .handleAction(fetchProjectsSuccess, handleSetTasks)
  .handleAction(resetProjects, handleResetTasks)
  .handleAction(createTaskRequest, handleCreateTaskRequest)
  .handleAction(createTaskSuccess, handleCreateTaskSuccess)
  .handleAction(createTaskFailure, handleCreateTaskFailure)
  .handleAction(deleteTaskRequest, handleDeleteTaskRequest)
  .handleAction(deleteTaskFailure, handleDeleteTaskFailure)
  .handleAction(deleteTaskSuccess, handleDeleteTaskSuccess)
  .handleAction(createProjectSuccess, handleCreateProjectSuccess);
