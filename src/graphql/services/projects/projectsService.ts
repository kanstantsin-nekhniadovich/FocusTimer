import { Status, Response, FullProject, Project } from '@typings';
import { api } from '../../api';
import * as mutations from './mutations';
import * as queries from './queries';

export const fetchProjects = ({ skip, first }: { skip: number; first: number; }) =>
  api.query<Response.Projects>({ query: queries.projects, variables: { skip, first } }, 'projects');

export const createProject = (data: { title: string; status: Status }) =>
  api.mutate<FullProject>({ mutation: mutations.createProject, variables: { data } }, 'createProject');

export const updateProject = ({ data, id }: { data: Partial<Project>; id: Id; }) =>
  api.mutate<FullProject>({ mutation: mutations.updateProject, variables: { data, where: { id } } }, 'updateProject');

export const deleteProject = (id: string) =>
  api.mutate<FullProject>({ mutation: mutations.deleteProject, variables: { id } }, 'deleteProject');
