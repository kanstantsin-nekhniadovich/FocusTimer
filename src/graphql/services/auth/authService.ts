import { Response } from '@typings';

import { request } from '../../api';
import * as mutations from './mutations';

export const login = async (email: string, password: string) => {
  return await request<Response.AuthPayload>({ document: mutations.login, variables: { email, password } }, 'login');
};

export const facebookLogin = async (email: string) => {
  return await request<Response.AuthPayload>({ document: mutations.facebookLogin, variables: { email } }, 'facebookLogin');
};
