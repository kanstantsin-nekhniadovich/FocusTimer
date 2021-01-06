import { Reducer } from 'redux';
import { ActionType, createReducer } from 'typesafe-actions';
import { testSuccess } from './actions';

type State = {
  test: string;
};

const initialState: State = {
  test: 'Initial value', 
};

const handleTestSuccess = (state: State, action: ActionType<typeof testSuccess>): State => {
  return {
    ...state,
    test: action.payload,
  };
};

export const testReducer: Reducer<State, AppActions> = createReducer(initialState)
  .handleAction(testSuccess, handleTestSuccess);
