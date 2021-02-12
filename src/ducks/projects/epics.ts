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
} from './actions';

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
    mergeMap(async (payload) => projectsService.createProject({ ...payload, status: Status.TODO })),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [createProjectSuccess(res.data)],
      res => [createProjectFailure(), showAlert({ type: 'error', message: res.error })],
    )),
  );

export const fetchProjectsEpic: AppEpic = (action$, _, { projectsService }) =>
  action$.pipe(
    filter(isActionOf(fetchProjectsRequest)),
    mergeMap(projectsService.fetchProjects),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [fetchProjectsSuccess(res.data)],
      res => [fetchProjectsFailure(), showAlert({ type: 'error', message: res.error })],
    )),
  );

export const projectsEpic = combineEpics(createProjectEpic, fetchProjectsEpic);
