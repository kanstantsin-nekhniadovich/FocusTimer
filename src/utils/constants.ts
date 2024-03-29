export const TOKEN = 'token';
export const FIREBASE_TOKEN_KEY = 'firebaseToken';
export const USER_SKIPPED_LOGIN_FLOW_KEY = 'isUserSkippedLoginFlow';

export const DEFAULT_WORK_TIME_IN_MINUTES = 25;
export const DEFAULT_BREAK_TIME_IN_MINUTES = 5;

export const PROJECTS_PER_REQUEST = 8;

export enum Status {
  TODO = 'TODO',
  INPROGRESS = 'INPROGRESS',
  COMPLETED = 'COMPLETED',
}

export enum ResponseStatus {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}
