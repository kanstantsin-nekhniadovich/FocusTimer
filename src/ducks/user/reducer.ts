import { User } from '@typings';
import { createReducer } from 'typesafe-actions';

import { loginSuccess, loginFailure, loginRequest, logoutRequest, facebookLoginSuccess, facebookLogoutRequest } from '../auth';

import {
  updateUserRequest,
  updateUserFailure,
  updateUserSuccess,
  saveUserAvatarRequest,
  fetchUserDataSuccess,
  fetchUserDataFailure,
  fetchUserDataRequest,
  createUserRequest,
  createUserSuccess,
  createUserFailure,
} from './actions';

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

const handleSetUserRequest: ActionHandler<State, typeof loginRequest | typeof createUserRequest | typeof fetchUserDataRequest> =
  (state) => ({
    ...state,
    isLoading: true,
  });

const handleSetUserSuccess: ActionHandler<State, typeof loginSuccess | typeof createUserSuccess> = (state, action) => ({
  ...state,
  user: action.payload.user,
  isLoading: false,
});

const handleSetUserFailure: ActionHandler<State, typeof loginFailure | typeof createUserFailure> = (state) => ({
  ...state,
  user: null,
  isLoading: false,
});

const handleLogoutRequest: ActionHandler<State, typeof logoutRequest> = (state) => ({
  ...state,
  user: null,
  isLoading: false,
});

const handleUpdateUserRequest: ActionHandler<State, typeof updateUserRequest | typeof saveUserAvatarRequest> = (state) => ({
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
  isLoading: false,
});

const handleFetchUserDataSuccess: ActionHandler<State, typeof fetchUserDataSuccess> = (state, action) => ({
  ...state,
  user: action.payload,
  isLoading: false,
});

const handleFetchUserDataFailure: ActionHandler<State, typeof fetchUserDataFailure> = (state, action) => ({
  ...state,
  error: action.payload,
  isLoading: false,
});

const handleFacebookLogoutRequest: ActionHandler<State, typeof facebookLogoutRequest> = (state) => ({
  ...state,
  user: null,
  isLoading: false,
});

const handleFacebookLoginSuccess: ActionHandler<State, typeof facebookLoginSuccess> = (state, action) => ({
  ...state,
  user: action.payload.user,
});

export const userReducer = createReducer<State, AppActions>(initialState)
  .handleAction(loginRequest, handleSetUserRequest)
  .handleAction(loginSuccess, handleSetUserSuccess)
  .handleAction(loginFailure, handleSetUserFailure)
  .handleAction(updateUserRequest, handleUpdateUserRequest)
  .handleAction(updateUserSuccess, handleUpdateUserSuccess)
  .handleAction(updateUserFailure, handleUpdateUserFailure)
  .handleAction(saveUserAvatarRequest, handleUpdateUserRequest)
  .handleAction(fetchUserDataRequest, handleSetUserRequest)
  .handleAction(fetchUserDataSuccess, handleFetchUserDataSuccess)
  .handleAction(logoutRequest, handleLogoutRequest)
  .handleAction(fetchUserDataFailure, handleFetchUserDataFailure)
  .handleAction(facebookLogoutRequest, handleFacebookLogoutRequest)
  .handleAction(facebookLoginSuccess, handleFacebookLoginSuccess)
  .handleAction(createUserRequest, handleSetUserRequest)
  .handleAction(createUserSuccess, handleSetUserSuccess)
  .handleAction(createUserFailure, handleSetUserFailure);
