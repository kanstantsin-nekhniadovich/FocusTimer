import { Task } from '@typings';
import { createAction } from 'typesafe-actions';

export const createTaskRequest = createAction('tasks/CREATE_TASKS_REQUEST')<Omit<Task, 'id'>>();
export const createTaskFailure = createAction('tasks/CREATE_TASKS_FAILURE')();
export const createTaskSuccess = createAction('tasks/CREATE_TASKS_SUCCESS')<Task>();
