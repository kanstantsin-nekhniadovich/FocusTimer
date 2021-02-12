import { User, Project, Task } from './types';

export namespace Response {
  export type AuthPayload = {
    token: string;
    firebaseToken: string;
    user: User;
  }

  export interface ProjectResponse extends Project {
    tasks: Task[];
  }

  export type All =
    | AuthPayload
    | User
    | Project
    | ProjectResponse[];
}
