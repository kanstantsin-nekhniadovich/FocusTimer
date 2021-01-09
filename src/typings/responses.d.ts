import { User } from './types';

export namespace Response {
  export type Login = {
    token: string;
    firebaseToken: string;
    user: User;
  }

  export type All = Login;
}
