import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, map, mergeMap, pluck, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Routes } from '../../routes';
import { navigate } from '../../services/navigation';
import { handleResponse } from '../../utils/handleResponse';
import { showAlert } from '../ui/actions';

import {
  createTaskRequest,
  createTaskSuccess,
  createTaskFailure,
  deleteTaskRequest,
  deleteTaskFailure,
  deleteTaskSuccess,
  updateTaskRequest,
  updateTaskFailure,
  updateTaskSuccess
} from './actions';

export const createTasksEpic: AppEpic = (action$, _state$, { tasksService }) =>
  action$.pipe(
    filter(isActionOf(createTaskRequest)),
    pluck('payload'),
    mergeMap(async (payload) => await tasksService.createTask(payload)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => {
        return of(res.data).pipe(
          mergeMap(data => [createTaskSuccess(data)]),
          tap(() => navigate(Routes.Task, { projectId: res.data.projectId, id: res.data.id })),
        );
      },
      res => [showAlert({ message: res.error, type: 'error' }), createTaskFailure()],
    )),
  );

export const updateTaskEpic: AppEpic = (action$, _state$, { tasksService }) =>
  action$.pipe(
    filter(isActionOf(updateTaskRequest)),
    pluck('payload'),
    mergeMap(async (payload) => await tasksService.updateTask(payload)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [updateTaskSuccess(res.data)],
      res => [showAlert({ message: res.error, type: 'error' }), updateTaskFailure()],
    )),
  );

export const deleteTaskEpic: AppEpic = (action$, _state$, { tasksService }) =>
  action$.pipe(
    filter(isActionOf(deleteTaskRequest)),
    pluck('payload'),
    mergeMap(async (id: Id) => await tasksService.deleteTask(id)),
    map(handleResponse),
    mergeMap(handler => handler(
      res => [deleteTaskSuccess(res.data)],
      res => [showAlert({ message: res.error, type: 'error' }), deleteTaskFailure()],
    )),
  );

export const tasksEpic = combineEpics(createTasksEpic, updateTaskEpic, deleteTaskEpic);
