import { Alert } from '@typings';
import { createAction } from 'typesafe-actions';

export const initApplicationRequest = createAction('ui/INIT_APPLICATION_REQUEST')();
export const initApplicationSuccess = createAction('ui/INIT_APPLICATION_SUCCESS')();

export const showAlert = createAction('ui/SHOW_ALERT')<{ message: string; type: Alert }>();
export const hideAlert = createAction('ui/HIDE_ALERT')();

export const readUserSkippedLoginFlow = createAction('ui/READ_USER_SKIPPED_LOGIN_FLOW')();
export const setUserSkippedLoginFlowRequest = createAction('ui/SET_USER_SKIPPED_LOGIN_FLOW_REQUEST')<boolean>();
export const setUserSkippedLoginFlowSuccess = createAction('ui/SET_USER_SKIPPED_LOGIN_FLOW_SUCCESS')<boolean>();
