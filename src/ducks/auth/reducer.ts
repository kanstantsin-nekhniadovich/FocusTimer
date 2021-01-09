import { User } from '@typings';
import { createReducer } from 'typesafe-actions';
import { loginFailure, loginSuccess } from './actions';

interface State {
  user: Nullable<User>;
  error: Nullable<string>;
}

const initialState: State = {
  user: null,
  error: null,
};

export const handleLoginSuccess: ActionHandler<State, typeof loginSuccess> = (state, action) => {
  return {
    ...state,
    user: action.payload.user,
  };
};

export const handleLoginFailure: ActionHandler<State, typeof loginFailure> = (state, action) =>({
  ...state,
  user: null,
  error: action.payload,
});

export const authReducer = createReducer(initialState)
  .handleAction(loginSuccess, handleLoginSuccess)
  .handleAction(loginFailure, handleLoginFailure);
