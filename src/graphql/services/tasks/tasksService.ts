import { Task, CreateTaskPayload } from '@typings';

import * as queries from './queries';
import * as mutations from './mutations';
import { request } from '../../api';

export const fetchTasks = async () => await request<Task[]>({ document: queries.tasks }, 'tasks');

export const createTask = async (payload: CreateTaskPayload) => {
  const { id } = payload.project;
  const data = { ...payload, project: { connect: { id } } };

  return await request<Task>({ document: mutations.createTask, variables: { data } }, 'createTask');
};

export const deleteTask = async (id: Id) => await request<Task>({ document: mutations.deleteTask, variables: { id } }, 'deleteTask');
