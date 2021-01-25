import { createReducer } from 'typesafe-actions';

import {
  loginFailure,
  loginSuccess,
  loginRequest,
  logoutRequest,
  facebookLoginFailure,
  facebookLogoutRequest,
  facebookLoginSuccess,
} from './actions';

import { createUserRequest, createUserSuccess, createUserFailure } from '../user';

interface State {
  error: Nullable<string>;
  isLoading: boolean;
  token: Nullable<string>;
  isFacebookAuth: boolean;
}

const initialState: State = {
  error: null,
  isLoading: false,
  token: null,
  isFacebookAuth: false,
};

export const handleSetTokenRequest: ActionHandler<State, typeof loginRequest | typeof createUserRequest> = state => ({
  ...state,
  error: null,
  isLoading: true,
});

export const handleSetTokenSuccess: ActionHandler<State, typeof loginSuccess | typeof createUserSuccess> = (state, action) => ({
  ...state,
  isLoading: false,
  error: null,
  token: action.payload.token,
});

export const handleSetTokenFailure: ActionHandler<State, typeof loginFailure | typeof createUserFailure> = (state, action) => ({
  ...state,
  error: action.payload,
  isLoading: false,
  token: null,
});

export const handleLogoutRequest: ActionHandler<State, typeof logoutRequest> = (state) => ({
  ...state,
  token: null,
});

export const handleFacebookLoginSuccess: ActionHandler<State, typeof facebookLoginSuccess> = (state) => ({
  ...state,
  error: null,
  isFacebookAuth: true,
});

export const handleFacebookLoginFailure: ActionHandler<State, typeof facebookLoginFailure> = (state, action) => ({
  ...state,
  error: action.payload,
  isFacebookAuth: false,
});

export const handleFacebookLogoutRequest: ActionHandler<State, typeof facebookLogoutRequest> = (state) => ({
  ...state,
  isFacebookAuth: false,
});

export const authReducer = createReducer(initialState)
  .handleAction(loginRequest, handleSetTokenRequest)
  .handleAction(loginSuccess, handleSetTokenSuccess)
  .handleAction(loginFailure, handleSetTokenFailure)
  .handleAction(logoutRequest, handleLogoutRequest)
  .handleAction(facebookLoginSuccess, handleFacebookLoginSuccess)
  .handleAction(facebookLoginFailure, handleFacebookLoginFailure)
  .handleAction(facebookLogoutRequest, handleFacebookLogoutRequest)
  .handleAction(createUserRequest, handleSetTokenRequest)
  .handleAction(createUserSuccess, handleSetTokenSuccess)
  .handleAction(createUserFailure, handleSetTokenFailure);
