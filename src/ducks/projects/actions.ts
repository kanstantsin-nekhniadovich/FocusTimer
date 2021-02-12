import { Response, Project } from '@typings';
import { createAction } from 'typesafe-actions';

export const createProjectRequest = createAction('projects/CREATE_PROJECT_REQUEST')<{ title: string }>();
export const createProjectSuccess = createAction('projects/CREATE_PROJECT_SUCCESS')<Project>();
export const createProjectFailure = createAction('projects/CREATE_PROJECT_FAILURE')();

export const fetchProjectsRequest = createAction('projects/FETCH_PROJECTS_REQUEST')();
export const fetchProjectsSuccess = createAction('projects/FETCH_PROJECTS_SUCCESS')<Response.ProjectResponse[]>();
export const fetchProjectsFailure = createAction('projects/FETCH_PROJECTS_FAILURE')();
