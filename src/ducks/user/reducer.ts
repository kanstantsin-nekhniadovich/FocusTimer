import { User } from '@typings';
import { createReducer } from 'typesafe-actions';

import { loginSuccess, loginFailure, loginRequest } from '../auth';
import { updateUserRequest, updateUserFailure, updateUserSuccess } from './actions';

interface State {
  user: Nullable<User>;
  isLoading: boolean;
  error: Nullable<string>;
}

const initialState: State = {
  user: null,
  isLoading: false,
  error: null,
};

const handleLoginRequest: ActionHandler<State, typeof loginRequest> = (state) => ({
  ...state,
  isLoading: true,
});

const handleLoginSuccess: ActionHandler<State, typeof loginSuccess> = (state, action) => ({
  ...state,
  user: action.payload.user,
  isLoading: false,
});

const handleLoginFailure: ActionHandler<State, typeof loginFailure> = (state) => ({
  ...state,
  user: null,
  isLoading: false,
});

const handleUpdateUserRequest: ActionHandler<State, typeof updateUserRequest> = (state) => ({
  ...state,
  isLoading: true,
});

const handleUpdateUserSuccess: ActionHandler<State, typeof updateUserSuccess> = (state, action) => ({
  ...state,
  user: action.payload,
  isLoading: false,
});

const handleUpdateUserFailure: ActionHandler<State, typeof updateUserFailure> = (state, action) => ({
  ...state,
  error: action.payload,
  isLoading: true,
});

export const userReducer = createReducer(initialState)
  .handleAction(loginRequest, handleLoginRequest)
  .handleAction(loginSuccess, handleLoginSuccess)
  .handleAction(loginFailure, handleLoginFailure)
  .handleAction(updateUserRequest, handleUpdateUserRequest)
  .handleAction(updateUserSuccess, handleUpdateUserSuccess)
  .handleAction(updateUserFailure, handleUpdateUserFailure);
