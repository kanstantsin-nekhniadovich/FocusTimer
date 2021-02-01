import { createAction } from 'typesafe-actions';

export const initApplicationRequest = createAction('ui/INIT_APPLICATION_REQUEST')();
export const initApplicationSuccess = createAction('ui/INIT_APPLICATION_SUCCESS')();

export const showErrorAlert = createAction('ui/SHOW_ERROR_ALERT')<string>();
export const hideErrorAlert = createAction('ui/HIDE_ERROR_ALERT')();

export const readUserSkippedLoginFlow = createAction('ui/READ_USER_SKIPPED_LOGIN_FLOW')();
export const setUserSkippedLoginFlowRequest = createAction('ui/SET_USER_SKIPPED_LOGIN_FLOW_REQUEST')<boolean>();
export const setUserSkippedLoginFlowSuccess = createAction('ui/SET_USER_SKIPPED_LOGIN_FLOW_SUCCESS')<boolean>();
