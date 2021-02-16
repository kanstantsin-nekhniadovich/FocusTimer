import { Project } from '@typings';

export const getIsProjectsLoading = (store: Store): boolean => store.projects.isLoading;
export const getProjects = (store: Store): Record<Id, Project> => store.projects.projects;
export const getProjectById = (id: Id) => (store: Store): Project => store.projects.projects[id];
