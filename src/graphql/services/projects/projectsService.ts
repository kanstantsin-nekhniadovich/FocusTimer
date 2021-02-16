import { Status, Response, Project } from '@typings';
import { api } from '../../api';
import * as mutations from './mutations';
import * as queries from './queries';

export const fetchProjects = () =>
  api.query<Response.ProjectResponse[]>({ query: queries.projects }, 'projects');

export const createProject = (data: { title: string; status: Status }) =>
  api.mutate<Response.ProjectResponse>({ mutation: mutations.createProject, variables: { data } }, 'createProject');

export const deleteProject = (id: string) =>
  api.mutate<Project>({ mutation: mutations.deleteProject, variables: { id } }, 'deleteProject');
