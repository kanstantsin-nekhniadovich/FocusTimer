import { User } from '@typings';
import { createReducer, action } from 'typesafe-actions';

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

const handleLoginRequest: ActionHandler<State, typeof loginRequest> = (state) => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleLoginSuccess: ActionHandler<State, typeof loginSuccess> = (state, action) => {
  return {
    ...state,
    user: action.payload.user,
    isLoading: false,
  };
};

const handleLoginFailure: ActionHandler<State, typeof loginFailure> = (state) => {
  return {
    ...state,
    user: null,
    isLoading: false,
  };
};

const handleUpdateUserRequest: ActionHandler<State, typeof updateUserRequest> = (state) => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleUpdateUserSuccess: ActionHandler<State, typeof updateUserSuccess> = (state, action) => {
  console.log(action.payload);
  return {
    ...state,
    user: action.payload,
    isLoading: false,
  };
};

const handleUpdateUserFailure: ActionHandler<State, typeof updateUserFailure> = (state, action) => {
  console.log(action.payload);
  return {
    ...state,
    error: action.payload,
    isLoading: true,
  };
};

export const userReducer = createReducer(initialState)
  .handleAction(loginRequest, handleLoginRequest)
  .handleAction(loginSuccess, handleLoginSuccess)
  .handleAction(loginFailure, handleLoginFailure)
  .handleAction(updateUserRequest, handleUpdateUserRequest)
  .handleAction(updateUserSuccess, handleUpdateUserSuccess)
  .handleAction(updateUserFailure, handleUpdateUserFailure);
