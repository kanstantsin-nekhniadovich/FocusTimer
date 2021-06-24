import { User, FullProject, Task, Project } from './types';

export namespace Response {
  export interface AuthPayload {
    token: string;
    firebaseToken: string;
    user: User;
  }

  export interface Projects {
    projects: FullProject[];
    totalCount: number;
  }

  export interface DeleteProject {
    project: Project;
    totalCount: number;
  }

  export type All =
    | AuthPayload
    | User
    | FullProject
    | Task[]
    | Task
    | Projects
    | DeleteProject;
}
