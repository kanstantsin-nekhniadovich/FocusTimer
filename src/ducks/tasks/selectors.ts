import { Task, Project } from '@typings';

import { isDefined } from '../../utils/isDefined';

export const getTasksForProject = (project: Maybe<Project>) => (store: Store): Task[] => {
  if (!isDefined(project)) {
    return [];
  }

  return store.tasks.tasks[project.id];
};

export const getTaskById = (projectId: Id, id: Id) => (store: Store) => {
  const tasks = store.tasks.tasks[projectId];

  return tasks.find(task => task.id === id);
};
