import { createAction } from 'typesafe-actions';
import { Response } from '@typings';

export const loginRequest = createAction('auth/LOGIN_REQUEST')<{ email: string; password: string }>();
export const loginSuccess = createAction('auth/LOGIN_SUCCESS')<Response.AuthPayload>();
export const loginFailure = createAction('auth/LOGIN_FAILURE')<string>();

export const logoutRequest = createAction('auth/LOGOUT_REQUEST')();

export const facebookLoginRequest = createAction('auth/FACEBOOK_LOGIN_REQUEST')();
export const facebookLoginSuccess = createAction('auth/FACEBOOK_LOGIN_SUCCESS')<Response.AuthPayload>();
export const facebookLoginFailure = createAction('auth/FACEBOOK_LOGIN_FAILURE')<string>();

export const facebookLogoutRequest = createAction('auth/FACEBOOK_LOGOUT_REQUEST')();

export const invalidateTokens = createAction('auth/INVALIDATE_TOKENS')();
