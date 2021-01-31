import { createReducer } from 'typesafe-actions';

import { showErrorAlert, hideErrorAlert } from './actions';

interface State {
  isErrorAlertShown: boolean;
  errorMessage: Nullable<string>;
}

const initialState: State = {
  isErrorAlertShown: false,
  errorMessage: null,
};

const handleShowErrorAlert: ActionHandler<State, typeof showErrorAlert> = (_state, action) => ({
  isErrorAlertShown: true,
  errorMessage: action.payload,
});

const handleHideErrorAlert: ActionHandler<State, typeof hideErrorAlert> = () => ({
  isErrorAlertShown: false,
  errorMessage: null,
});

export const uiReducer = createReducer(initialState)
  .handleAction(showErrorAlert, handleShowErrorAlert)
  .handleAction(hideErrorAlert, handleHideErrorAlert);
