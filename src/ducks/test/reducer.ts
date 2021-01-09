import { Reducer } from 'redux';
import { createReducer } from 'typesafe-actions';
import { testSuccess } from './actions';

type State = {
  test: string;
};

const initialState: State = {
  test: 'Initial value', 
};

const handleTestSuccess: ActionHandler<State, typeof testSuccess> = (state, action) => {
  return {
    ...state,
    test: action.payload,
  };
};

export const testReducer: Reducer<State, AppActions> = createReducer(initialState)
  .handleAction(testSuccess, handleTestSuccess);
