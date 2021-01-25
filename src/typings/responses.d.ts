import { User } from './types';

export namespace Response {
  export type AuthPayload = {
    token: string;
    firebaseToken: string;
    user: User;
  }

  export type All =
    | AuthPayload
    | User;
}
