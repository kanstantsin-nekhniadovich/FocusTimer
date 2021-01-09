import { Response } from '@typings';

import { api } from '../../api';
import * as mutations from './mutations';

export const login = async (email: string, password: string) => {
  return api.mutate<Response.Login>({ mutation: mutations.login, variables: { email, password } }, 'login');
};
