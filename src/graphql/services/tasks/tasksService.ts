import { Task, TaskPayload } from '@typings';

import * as queries from './queries';
import * as mutations from './mutations';
import { api } from '../../api';

export const fetchTasks = async () => await api.query<Task[]>({ query: queries.tasks }, 'tasks');

export const createTask = async ({ data, projectId }: TaskPayload) => {
  const payload = { ...data, project: { connect: { id: projectId } } };

  return await api.mutate<Task>({ mutation: mutations.createTask, variables: { data: payload } }, 'createTask');
};
