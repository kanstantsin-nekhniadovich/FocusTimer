import { createReducer } from 'typesafe-actions';
import { loginFailure, loginSuccess, loginRequest, logoutRequest } from './actions';

interface State {
  error: Nullable<string>;
  isLoading: boolean;
  token: Nullable<string>;
}

const initialState: State = {
  error: null,
  isLoading: false,
  token: null,
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

export const authReducer = createReducer(initialState)
  .handleAction(loginRequest, handleLoginRequest)
  .handleAction(loginSuccess, handleLoginSuccess)
  .handleAction(loginFailure, handleLoginFailure)
  .handleAction(logoutRequest, handleLogoutRequest);
