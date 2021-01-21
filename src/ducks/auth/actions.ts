import { createAction } from 'typesafe-actions';
import { Response } from '@typings';

export const loginRequest = createAction('auth/LOGIN_REQUEST')<{ email: string; password: string }>();
export const loginSuccess = createAction('auth/LOGIN_SUCCESS')<Response.Login>();
export const loginFailure = createAction('auth/LOGIN_FAILURE')<string>();

export const logoutRequest = createAction('auth/LOGOUT_REQUEST')();
