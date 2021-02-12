import { Status, Project } from '@typings';
import { api } from '../../api';
import * as mutations from './mutations';
import * as queries from './queries';

export const fetchProjects = () =>
  api.query<Project[]>({ query: queries.projects }, 'projects');

export const createProject = (data: { title: string; status: Status }) =>
  api.mutate<Project>({ mutation: mutations.createProject, variables: { data } }, 'createProject');
