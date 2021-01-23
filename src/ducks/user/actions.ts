import { User } from '@typings';
import { createAction } from 'typesafe-actions';

export const updateUserRequest = createAction('user/UPDATE_USER_REQUEST')<Partial<User>>();
export const updateUserSuccess = createAction('user/UPDATE_USER_SUCCESS')<User>();
export const updateUserFailure = createAction('user/UPDATE_USER_FAILURE')<string>();

export const saveUserAvatarRequest = createAction('user/SAVE_USER_AVATAR_REQUEST')<string>();

export const fetchUserDataRequest = createAction('user/FETCH_USER_DATA_REQUEST')();
export const fetchUserDataSuccess = createAction('user/FETCH_USER_DATA_SUCCESS')<User>();
export const fetchUserDataFailure = createAction('user/FETCH_USER_DATA_FAILURE')<Nullable<string>>();
