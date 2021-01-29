import { Response } from '@typings';

import { api } from '../../api';
import * as mutations from './mutations';

export const login = async (email: string, password: string) => {
  return api.mutate<Response.AuthPayload>({ mutation: mutations.login, variables: { email, password } }, 'login');
};

export const facebookLogin = async (email: string) => {
  return api.mutate<Response.AuthPayload>({ mutation: mutations.facebookLogin, variables: { email } }, 'facebookLogin');
};
