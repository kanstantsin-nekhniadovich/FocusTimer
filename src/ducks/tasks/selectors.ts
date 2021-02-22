export const getTasksForProject = (id: Id) => (store: Store) => store.tasks.tasks[id];
