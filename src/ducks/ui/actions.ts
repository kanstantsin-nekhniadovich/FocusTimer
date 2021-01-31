import { createAction } from 'typesafe-actions';

export const initApplication = createAction('ui/INIT_APPLICATION')();
export const showErrorAlert = createAction('ui/SHOW_ERROR_ALERT')<string>();
export const hideErrorAlert = createAction('ui/HIDE_ERROR_ALERT')();
