import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, map, mergeMap, pluck } from 'rxjs/operators';

import { createTaskRequest, createTaskSuccess, createTaskFailure } from './actions';
import { handleResponse } from '../../utils/handleResponse';

export const createTasksEpic: AppEpic = (action$, _state$, { tasksService }) =>
  action$.pipe(
    filter(isActionOf(createTaskRequest)),
    pluck('payload'),
    mergeMap(async (payload) => await tasksService.createTask(payload)),
    map(handleResponse),
    map(handler => handler(
      res => createTaskSuccess(res.data),
      () => createTaskFailure(),
    )),
  );

export const tasksEpic = combineEpics(createTasksEpic);
