import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, map, mergeMap, pluck, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Routes } from '../../routes';
import { navigate } from '../../services/navigation';
import { createTaskRequest, createTaskSuccess, createTaskFailure } from './actions';
import { handleResponse } from '../../utils/handleResponse';
import { showAlert } from '../ui/actions';

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

export const tasksEpic = combineEpics(createTasksEpic);
