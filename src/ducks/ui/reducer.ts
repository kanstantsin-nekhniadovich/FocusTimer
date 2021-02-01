import { createReducer } from 'typesafe-actions';

import { initApplicationSuccess, showErrorAlert, hideErrorAlert, setUserSkippedLoginFlowSuccess } from './actions';

interface State {
  isApplicationInited: false,
  isErrorAlertShown: boolean;
  isUserSkippedLoginFlow: boolean;
  errorMessage: Nullable<string>;
}

const initialState: State = {
  isApplicationInited: false,
  isUserSkippedLoginFlow: false,
  isErrorAlertShown: false,
  errorMessage: null,
};

const handleInitApplicationSuccess: ActionHandler<State, typeof initApplicationSuccess> = (state) => ({
  ...state,
  isApplicationInited: true,
});

const handleShowErrorAlert: ActionHandler<State, typeof showErrorAlert> = (state, action) => ({
  ...state,
  isErrorAlertShown: true,
  errorMessage: action.payload,
});

const handleHideErrorAlert: ActionHandler<State, typeof hideErrorAlert> = (state) => ({
  ...state,
  isErrorAlertShown: false,
  errorMessage: null,
});

const handleSetUserSkippedLoginFlowSuccess: ActionHandler<State, typeof setUserSkippedLoginFlowSuccess> = (state, action) => ({
  ...state,
  isUserSkippedLoginFlow: action.payload,
});

export const uiReducer = createReducer(initialState)
  .handleAction(showErrorAlert, handleShowErrorAlert)
  .handleAction(hideErrorAlert, handleHideErrorAlert)
  .handleAction(setUserSkippedLoginFlowSuccess, handleSetUserSkippedLoginFlowSuccess)
  .handleAction(initApplicationSuccess, handleInitApplicationSuccess);
