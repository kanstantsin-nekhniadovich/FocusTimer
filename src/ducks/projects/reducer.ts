import { Project } from '@typings';
import { assocPath, uniqBy, prop } from 'ramda';
import { createReducer, ActionType } from 'typesafe-actions';

import * as actions from './actions';

import {
  createProjectRequest,
  createProjectSuccess,
  createProjectFailure,
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  deleteProjectRequest,
  deleteProjectFailure,
  deleteProjectSuccess,
  updateProjectRequest,
  updateProjectSuccess,
  updateProjectFailure,
  resetProjects,
} from './actions';

interface State {
  projects: Project[];
  isLoading: boolean;
  totalCount: number;
}

const initialState: State = {
  projects: [],
  isLoading: false,
  totalCount: 0,
};

export const handleCreateProjectRequest: ActionHandler<State, typeof createProjectRequest> = (state) => ({
  ...state,
  isLoading: true,
});

export const handleCreateProjectSuccess: ActionHandler<State, typeof createProjectSuccess> = (state, action) => {
  const { id, title, status, note } = action.payload;

  return {
    ...state,
    projects: [{ id, title, status, note }, ...state.projects],
    isLoading: false,
    totalCount: state.totalCount + 1,
  };
};

export const handleCreateProjectFailure: ActionHandler<State, typeof createProjectFailure> = (state) => ({
  ...state,
  isLoading: false,
});

export const handleFetchProjectsRequest: ActionHandler<State, typeof fetchProjectsRequest> = (state) => ({
  ...state,
  isLoading: true,
});

export const handleFetchProjectsSuccess: ActionHandler<State, typeof fetchProjectsSuccess> = (state, action) => {
  const { totalCount, projects } = action.payload;

  return {
    ...state,
    isLoading: false,
    projects: uniqBy(prop('id'), [...state.projects, ...projects]),
    totalCount,
  };
};

export const handleFetchProjectsFailure: ActionHandler<State, typeof fetchProjectsFailure> = (state) => ({
  ...state,
  isLoading: false,
});

export const handleUpdateProjectRequest: ActionHandler<State, typeof updateProjectRequest> = (state) => ({
  ...state,
  isLoading: true,
});

export const handleUpdateProjectSuccess: ActionHandler<State, typeof updateProjectSuccess> = (state, action) => {
  const { id } = action.payload;
  const index = state.projects.findIndex((project) => project.id === id);

  return {
    ...state,
    isLoading: false,
    projects: assocPath([index], action.payload, state.projects),
  };
};

export const handleUpdateProjectFailure: ActionHandler<State, typeof updateProjectFailure> = (state) => ({
  ...state,
  isLoading: false,
});

export const handleDeleteProjectRequest: ActionHandler<State, typeof deleteProjectRequest> = (state) => ({
  ...state,
  isLoading: true,
});

export const handleDeleteProjectSuccess: ActionHandler<State, typeof deleteProjectSuccess> = (state, action) => {
  const { project, totalCount } = action.payload;

  return {
    ...state,
    isLoading: false,
    projects: state.projects.filter(({ id }) => id !== project.id),
    totalCount,
  };
};

export const handleDeleteProjectFailure: ActionHandler<State, typeof deleteProjectFailure> = (state) => ({
  ...state,
  isLoading: false,
});

export const handleResetProjects: ActionHandler<State, typeof resetProjects> = () => initialState;

export const projectsReducer = createReducer<State, ActionType<typeof actions>>(initialState)
  .handleAction(createProjectRequest, handleCreateProjectRequest)
  .handleAction(createProjectSuccess, handleCreateProjectSuccess)
  .handleAction(createProjectFailure, handleCreateProjectFailure)
  .handleAction(fetchProjectsRequest, handleFetchProjectsRequest)
  .handleAction(fetchProjectsSuccess, handleFetchProjectsSuccess)
  .handleAction(fetchProjectsFailure, handleFetchProjectsFailure)
  .handleAction(deleteProjectRequest, handleDeleteProjectRequest)
  .handleAction(deleteProjectSuccess, handleDeleteProjectSuccess)
  .handleAction(deleteProjectFailure, handleDeleteProjectFailure)
  .handleAction(updateProjectRequest, handleUpdateProjectRequest)
  .handleAction(updateProjectSuccess, handleUpdateProjectSuccess)
  .handleAction(updateProjectFailure, handleUpdateProjectFailure)
  .handleAction(resetProjects, handleResetProjects);
