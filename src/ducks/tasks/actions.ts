import { Task, CreateTaskPayload } from '@typings';
import { createAction } from 'typesafe-actions';

export const createTaskRequest = createAction('tasks/CREATE_TASKS_REQUEST')<CreateTaskPayload>();
export const createTaskFailure = createAction('tasks/CREATE_TASKS_FAILURE')();
export const createTaskSuccess = createAction('tasks/CREATE_TASKS_SUCCESS')<Task>();

export const deleteTaskRequest = createAction('tasks/DELETE_TASK_REQUEST')<Id>();
export const deleteTaskFailure = createAction('tasks/DELETE_TASK_FAILURE')();
export const deleteTaskSuccess = createAction('tasks/DELETE_TASK_SUCCESS')<Task>();
