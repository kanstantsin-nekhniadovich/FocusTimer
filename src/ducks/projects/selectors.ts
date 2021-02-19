import { Project } from '@typings';
import { createSelector } from 'reselect';

export const getIsProjectsLoading = (store: Store): boolean => store.projects.isLoading;
export const getProjects = (store: Store): Project[] => store.projects.projects;
export const getProjectTotalCount = (store: Store): number => store.projects.totalCount;

export const getProjectById = (id: Id) => createSelector(
  getProjects,
  projects => projects.find((project) => project.id === id),
);
