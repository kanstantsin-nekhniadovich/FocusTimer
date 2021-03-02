import { Task } from '@typings';

export const getTasksForProject = (id: Id) => (store: Store): Task[] | undefined => store.tasks.tasks[id];
