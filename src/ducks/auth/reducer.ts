import { User } from '@typings';
import { createReducer } from 'typesafe-actions';
import { loginFailure, loginSuccess, loginRequest } from './actions';

interface State {
  error: Nullable<string>;
  isLoading: boolean;
  user: Nullable<User>;
}

const initialState: State = {
  error: null,
  isLoading: false,
  user: null,
};

export const handleLoginRequest: ActionHandler<State, typeof loginRequest> = state => {
  return {
    ...state,
    isLoading: true,
  };
};

export const handleLoginSuccess: ActionHandler<State, typeof loginSuccess> = (state, action) => {
  return {
    ...state,
    isLoading: false,
    user: action.payload.user,
  };
};

export const handleLoginFailure: ActionHandler<State, typeof loginFailure> = (state, action) =>({
  ...state,
  error: action.payload,
  isLoading: false,
  user: null,
});

export const authReducer = createReducer(initialState)
  .handleAction(loginRequest, handleLoginRequest)
  .handleAction(loginSuccess, handleLoginSuccess)
  .handleAction(loginFailure, handleLoginFailure);
