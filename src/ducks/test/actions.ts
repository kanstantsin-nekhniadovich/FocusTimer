import { createAction } from 'typesafe-actions';

export const testRequest = createAction('action/test-request')<number>();
export const testSuccess = createAction('action/test-success')<string>();
