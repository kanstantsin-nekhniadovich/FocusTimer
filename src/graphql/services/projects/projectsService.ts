import { Status, Response, FullProject, Project } from '@typings';
import { request } from '../../api';
import * as mutations from './mutations';
import * as queries from './queries';

export const fetchProjects = async ({ skip, take }: { skip: number; take: number }) =>
  await request<Response.Projects>({ document: queries.projects, variables: { skip, take } }, 'projects');

export const createProject = async (data: { title: string; status: Status }) =>
  await request<FullProject>({ document: mutations.createProject, variables: { data } }, 'createProject');

export const updateProject = async ({ data, id }: { data: Partial<Project>; id: Id }) =>
  await request<FullProject>({ document: mutations.updateProject, variables: { data, where: { id } } }, 'updateProject');

export const deleteProject = async (id: string) =>
  await request<Response.DeleteProject>({ document: mutations.deleteProject, variables: { id } }, 'deleteProject');
