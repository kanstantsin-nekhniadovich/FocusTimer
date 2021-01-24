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

export const handleLoginRequest: ActionHandler<State, typeof loginRequest> = state => ({
  ...state,
  error: null,
  isLoading: true,
});

export const handleLoginSuccess: ActionHandler<State, typeof loginSuccess> = (state, action) => ({
  ...state,
  isLoading: false,
  error: null,
  token: action.payload.token,
});

export const handleLoginFailure: ActionHandler<State, typeof loginFailure> = (state, action) => ({
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
  .handleAction(loginRequest, handleLoginRequest)
  .handleAction(loginSuccess, handleLoginSuccess)
  .handleAction(loginFailure, handleLoginFailure)
  .handleAction(logoutRequest, handleLogoutRequest)
  .handleAction(facebookLoginSuccess, handleFacebookLoginSuccess)
  .handleAction(facebookLoginFailure, handleFacebookLoginFailure)
  .handleAction(facebookLogoutRequest, handleFacebookLogoutRequest);
