import { User, Response } from '@typings';
import { createAction } from 'typesafe-actions';

export const createUserRequest = createAction('user/CREATE_USER_REQUEST')<{ email: string; password: string }>();
export const createUserSuccess = createAction('user/CREATE_USER_SUCCESS')<Response.AuthPayload>();
export const createUserFailure = createAction('user/CREATE_USER_FAILURE')<Nullable<string>>();

export const createFacebookUserRequest = createAction('user/CREATE_FACEBOOK_USER_REQUEST')();

export const updateUserRequest = createAction('user/UPDATE_USER_REQUEST')<Partial<User> & { password?: string }>();
export const updateUserSuccess = createAction('user/UPDATE_USER_SUCCESS')<User>();
export const updateUserFailure = createAction('user/UPDATE_USER_FAILURE')<string>();

export const saveUserAvatarRequest = createAction('user/SAVE_USER_AVATAR_REQUEST')<string>();

export const fetchUserDataRequest = createAction('user/FETCH_USER_DATA_REQUEST')();
export const fetchUserDataSuccess = createAction('user/FETCH_USER_DATA_SUCCESS')<User>();
export const fetchUserDataFailure = createAction('user/FETCH_USER_DATA_FAILURE')<Nullable<string>>();
