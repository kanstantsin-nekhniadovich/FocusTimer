import { User, Response } from '@typings';

import { api } from '../../api';
import * as mutations from './mutations';
import * as queries from './queries';

export const createUser = async (data: { email: string; password: string; }) => {
  return api.mutate<Response.AuthPayload>({ mutation: mutations.createUser, variables: { data } }, 'createUser');
};

export const updateUser = async (data: Partial<User>) => {
  return api.mutate<User>({ mutation: mutations.updateUser, variables: { data } }, 'updateUser');
};

export const getUser = async () => {
  return api.query<User>({ query: queries.user }, 'user');
};
