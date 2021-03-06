import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, mergeMap, pluck, map } from 'rxjs/operators';

import {
  createProjectRequest,
  createProjectFailure,
  createProjectSuccess,
  fetchProjectsFailure,
  fetchProjectsRequest,
  fetchProjectsSuccess,
  deleteProjectRequest,
  deleteProjectFailure,
  deleteProjectSuccess,
  updateProjectRequest,
  updateProjectSuccess,
  updateProjectFailure,
} from './actions';

import { PROJECTS_PER_REQUEST } from '../../settings';
import { handleResponse } from '../../utils/handleResponse';
import { showAlert } from '../ui';

enum Status {
  TODO = 'TODO',
  INPROGRESS = 'INPROGRESS',
  COMPLETED = 'COMPLETED',
}

export const createProjectEpic: AppEpic = (action$, _, { projectsService }) =>
  action$.pipe(
    filter(isActionOf(createProjectRequest)),
    pluck('payload'),
    mergeMap(async (payload) => await projectsService.createProject({ ...payload, status: Status.TODO })),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [createProjectSuccess(res.data)],
      res => [createProjectFailure(), showAlert({ type: 'error', message: res.error })],
    )),
  );

export const fetchProjectsEpic: AppEpic = (action$, _, { projectsService }) =>
  action$.pipe(
    filter(isActionOf(fetchProjectsRequest)),
    pluck('payload'),
    mergeMap(async ({ skip }) => await projectsService.fetchProjects({ skip, first: PROJECTS_PER_REQUEST })),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [fetchProjectsSuccess(res.data)],
      res => [fetchProjectsFailure(), showAlert({ type: 'error', message: res.error })],
    )),
  );

export const updateProjectEpic: AppEpic = (action$, _, { projectsService }) =>
  action$.pipe(
    filter(isActionOf(updateProjectRequest)),
    pluck('payload'),
    mergeMap(async (payload) => await projectsService.updateProject(payload)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [updateProjectSuccess(res.data)],
      res => [updateProjectFailure(), showAlert({ type: 'error', message: res.error })],
    )),
  );

export const deleteProjectEpic: AppEpic = (action$, _, { projectsService }) =>
  action$.pipe(
    filter(isActionOf(deleteProjectRequest)),
    pluck('payload'),
    mergeMap(projectsService.deleteProject),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [deleteProjectSuccess(res.data)],
      () => [deleteProjectFailure(), showAlert({ type: 'error', message: 'Unable to delete project.' })],
    )),
  );

export const projectsEpic = combineEpics(createProjectEpic, fetchProjectsEpic, deleteProjectEpic, updateProjectEpic);
