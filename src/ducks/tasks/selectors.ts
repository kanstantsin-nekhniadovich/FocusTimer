import { Task, Project } from '@typings';
import { pathOr } from 'ramda';

import { isDefined } from '../../utils/isDefined';

export const getTasksForProject = (project: Maybe<Project>) => (store: Store): Task[] => {
  if (!isDefined(project)) {
    return [];
  }

  return store.tasks.tasks[project.id];
};

export const getTaskById = (projectId: Id, id: Id) => (store: Store): Maybe<Task> => {
  const tasks = pathOr<Task[]>([], [projectId], store.tasks.tasks);

  return tasks.find(task => task.id === id);
};

export const getIsTaskLoading = (store: Store) => store.tasks.isLoading;
