import { Reducer } from 'redux';
import { ActionType, createReducer } from 'typesafe-actions';
import { test } from './actions';

type State = {
  test: string;
};

const initialState: State = {
  test: 'Initial value', 
};

const handleTest = (state: State, action: ActionType<typeof test>): State => {
  return {
    ...state,
    test: action.payload,
  };
};

export const testReducer: Reducer<State, Actions> = createReducer(initialState)
  .handleAction(test, handleTest);
