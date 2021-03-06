import { AlertMeta } from '@typings';
import { createReducer } from 'typesafe-actions';

import { initApplicationSuccess, showAlert, hideAlert, setUserSkippedLoginFlowSuccess } from './actions';

interface State {
  isApplicationInited: boolean;
  alert: AlertMeta;
  isUserSkippedLoginFlow: boolean;
}

const initialState: State = {
  isApplicationInited: false,
  isUserSkippedLoginFlow: false,
  alert: {
    isVisible: false,
    type: 'success',
    message: '',
  },
};

const handleInitApplicationSuccess: ActionHandler<State, typeof initApplicationSuccess> = (state) => ({
  ...state,
  isApplicationInited: true,
});

const handleShowAlert: ActionHandler<State, typeof showAlert> = (state, action) => ({
  ...state,
  alert: {
    isVisible: true,
    ...action.payload,
  },
});

const handleHideAlert: ActionHandler<State, typeof hideAlert> = (state) => ({
  ...state,
  alert: {
    isVisible: false,
    message: '',
  },
});

const handleSetUserSkippedLoginFlowSuccess: ActionHandler<State, typeof setUserSkippedLoginFlowSuccess> = (state, action) => ({
  ...state,
  isUserSkippedLoginFlow: action.payload,
});

export const uiReducer = createReducer<State, AppActions>(initialState)
  .handleAction(showAlert, handleShowAlert)
  .handleAction(hideAlert, handleHideAlert)
  .handleAction(setUserSkippedLoginFlowSuccess, handleSetUserSkippedLoginFlowSuccess)
  .handleAction(initApplicationSuccess, handleInitApplicationSuccess);
