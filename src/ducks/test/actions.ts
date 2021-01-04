import { createAction } from 'typesafe-actions';

export const test = createAction('test/action')<string>();
