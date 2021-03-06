import { User, FullProject } from './types';

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

  export type All =
    | AuthPayload
    | User
    | FullProject
    | Projects;
}
