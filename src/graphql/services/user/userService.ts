import { User, Response } from '@typings';

import { api } from '../../api';
import * as mutations from './mutations';
import * as queries from './queries';

export const createUser = async (data: { email: string; password: string }) => {
  return await api.mutate<Response.AuthPayload>({ mutation: mutations.createUser, variables: { data } }, 'createUser');
};

export const createFacebookUser = async (data: { email: string; name: string; avatarUrl: Nullable<string> }) => {
  return await api.mutate<Response.AuthPayload>({ mutation: mutations.createFacebookUser, variables: { data } }, 'createFacebookUser');
};

export const updateUser = async (data: Partial<User>) => {
  return await api.mutate<User>({ mutation: mutations.updateUser, variables: { data } }, 'updateUser');
};

export const getUser = async () => {
  return await api.query<User>({ query: queries.user }, 'user');
};
