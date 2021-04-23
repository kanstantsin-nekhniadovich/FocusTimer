import { Task, Project } from '@typings';
import { isDefined } from '../../utils/isDefined';

export const getTasksForProject = (project: Maybe<Project>) => (store: Store): Task[] => {
  if (!isDefined(project)) {
    return [];
  }

  return store.tasks.tasks[project.id];
};
