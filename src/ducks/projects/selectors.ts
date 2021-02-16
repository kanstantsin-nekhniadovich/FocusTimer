import { Project } from '@typings';

export const getIsProjectsLoading = (store: Store): boolean => store.projects.isLoading;
export const getProjects = (store: Store): Project[] => store.projects.projects;
