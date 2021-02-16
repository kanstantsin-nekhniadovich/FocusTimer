import { Project } from '@typings';
import { createReducer } from 'typesafe-actions';

import {
  createProjectRequest,
  createProjectSuccess,
  createProjectFailure,
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from './actions';

interface State {
  projects: Project[];
  isLoading: boolean;
}

const initialState: State = {
  projects: [],
  isLoading: false,
};

export const handleCreateProjectRequest: ActionHandler<State, typeof createProjectRequest> = (state) => ({
  ...state,
  isLoading: true,
});

export const handleCreateProjectSuccess: ActionHandler<State, typeof createProjectSuccess> = (state, action) => {
  const { id, title, status, note } = action.payload;
  console.log(action.payload);

  return {
    ...state,
    projects: [...state.projects, { id, title, status, note }],
    isLoading: false,
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
  const projects = action.payload.map(({ id, title, status, note }) => ({ id, status, title, note }));

  return {
    ...state,
    isLoading: false,
    projects: [...state.projects, ...projects],
  };
};

export const handlefFetchProjectsFailure: ActionHandler<State, typeof fetchProjectsFailure> = (state) => ({
  ...state,
  isLoading: false,
});

export const projectsReducer = createReducer(initialState)
  .handleAction(createProjectRequest, handleCreateProjectRequest)
  .handleAction(createProjectSuccess, handleCreateProjectSuccess)
  .handleAction(createProjectFailure, handleCreateProjectFailure)
  .handleAction(fetchProjectsRequest, handleFetchProjectsRequest)
  .handleAction(fetchProjectsSuccess, handleFetchProjectsSuccess)
  .handleAction(fetchProjectsFailure, handlefFetchProjectsFailure);
