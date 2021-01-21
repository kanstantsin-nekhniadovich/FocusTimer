import { User } from '@typings';
import { createAction } from 'typesafe-actions';

export const updateUserRequest = createAction('user/UPDATE_USER_REQUEST')<Partial<User>>();
export const updateUserSuccess = createAction('user/UPDATE_USER_SUCCESS')<User>();
export const updateUserFailure = createAction('user/UPDATE_USER_FAILURE')<string>();
