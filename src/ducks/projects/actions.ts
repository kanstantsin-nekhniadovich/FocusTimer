import { Response, FullProject } from '@typings';
import { createAction } from 'typesafe-actions';

export const createProjectRequest = createAction('projects/CREATE_PROJECT_REQUEST')<{ title: string }>();
export const createProjectSuccess = createAction('projects/CREATE_PROJECT_SUCCESS')<FullProject>();
export const createProjectFailure = createAction('projects/CREATE_PROJECT_FAILURE')();

export const fetchProjectsRequest = createAction('projects/FETCH_PROJECTS_REQUEST')<{ skip: number }>();
export const fetchProjectsSuccess = createAction('projects/FETCH_PROJECTS_SUCCESS')<Response.Projects>();
export const fetchProjectsFailure = createAction('projects/FETCH_PROJECTS_FAILURE')();

export const deleteProjectRequest = createAction('projects/DELETE_PROJECT_REQUEST')<Id>();
export const deleteProjectSuccess = createAction('projects/DELETE_PROJECT_SUCCESS')<FullProject>();
export const deleteProjectFailure = createAction('projects/DELETE_PROJECT_FAILURE')();
