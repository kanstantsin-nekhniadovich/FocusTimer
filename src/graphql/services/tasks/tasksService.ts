import { Task } from '@typings';

import * as queries from './queries';
import * as mutations from './mutations';
import { api } from '../../api';

export const fetchTasks = async () => await api.query<Task[]>({ query: queries.tasks }, 'tasks');

export const createTask = async (payload: Omit<Task, 'id'>) => {
  const { id } = payload.project;
  const data = { ...payload, project: { connect: { id } } };

  return await api.mutate<Task>({ mutation: mutations.createTask, variables: { data } }, 'createTask');
};
