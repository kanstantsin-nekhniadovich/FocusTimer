import { createSelector } from 'reselect';

export const getIsProjectsLoading = (store: Store) => store.projects.isLoading;
export const getProjects = (store: Store) => store.projects.projects;
export const getProjectTotalCount = (store: Store) => store.projects.totalCount;

export const getProjectById = (id: Id) => createSelector(
  getProjects,
  projects => projects.find((project) => project.id === id),
);
