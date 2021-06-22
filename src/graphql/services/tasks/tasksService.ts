import { Task, CreateTaskPayload } from '@typings';

import * as queries from './queries';
import * as mutations from './mutations';
import { api } from '../../api';

export const fetchTasks = async () => await api.query<Task[]>({ query: queries.tasks }, 'tasks');

export const createTask = async (payload: CreateTaskPayload) => {
  const { id } = payload.project;
  const data = { ...payload, project: { connect: { id } } };

  return await api.mutate<Task>({ mutation: mutations.createTask, variables: { data } }, 'createTask');
};

export const deleteTask = async (id: Id) => await api.mutate<Task>({ mutation: mutations.deleteTask, variables: { id } }, 'deleteTask');
