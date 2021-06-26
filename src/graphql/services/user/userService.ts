import { User, Response } from '@typings';

import { request } from '../../api';
import * as mutations from './mutations';
import * as queries from './queries';

export const createUser = async (data: { email: string; password: string }) => {
  return await request<Response.AuthPayload>({ document: mutations.createUser, variables: { data } }, 'createUser');
};

export const createFacebookUser = async (data: { email: string; name: string; avatarUrl: Nullable<string> }) => {
  return await request<Response.AuthPayload>({ document: mutations.createFacebookUser, variables: { data } }, 'createFacebookUser');
};

export const updateUser = async (data: Partial<User>) => {
  return await request<User>({ document: mutations.updateUser, variables: { data } }, 'updateUser');
};

export const getUser = async () => {
  return await request<User>({ document: queries.user }, 'user');
};
