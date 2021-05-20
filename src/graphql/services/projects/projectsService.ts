import { Status, Response, FullProject, Project } from '@typings';
import { api } from '../../api';
import * as mutations from './mutations';
import * as queries from './queries';

export const fetchProjects = async ({ skip, take }: { skip: number; take: number }) =>
  await api.query<Response.Projects>({ query: queries.projects, variables: { skip, take } }, 'projects');

export const createProject = async (data: { title: string; status: Status }) =>
  await api.mutate<FullProject>({ mutation: mutations.createProject, variables: { data } }, 'createProject');

export const updateProject = async ({ data, id }: { data: Partial<Project>; id: Id }) =>
  await api.mutate<FullProject>({ mutation: mutations.updateProject, variables: { data, where: { id } } }, 'updateProject');

export const deleteProject = async (id: string) =>
  await api.mutate<FullProject>({ mutation: mutations.deleteProject, variables: { id } }, 'deleteProject');
