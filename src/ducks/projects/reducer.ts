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

export const handleCreateProjectSuccess: ActionHandler<State, typeof createProjectSuccess> = (state, action) => ({
  ...state,
  projects: [...state.projects, action.payload],
  isLoading: false,
});

export const handleCreateProjectFailure: ActionHandler<State, typeof createProjectFailure> = (state) => ({
  ...state,
  isLoading: false,
});

export const handleFetchProjectsRequest: ActionHandler<State, typeof fetchProjectsRequest> = (state) => ({
  ...state,
  isLoading: true,
});

export const handleFetchProjectsSuccess: ActionHandler<State, typeof fetchProjectsSuccess> = (state, action) => ({
  ...state,
  isLoading: false,
  projects: [...state.projects, ...action.payload],
});

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
