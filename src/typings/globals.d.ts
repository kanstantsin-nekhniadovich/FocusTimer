import { ActionType, StateType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { AuthActions, UserActions, UiActions, ProjectsActions, TasksActions, rootReducer } from '../ducks';
import { Services as ServicesType } from '../graphql/services';

declare global {
  export type Id = string;
  export type Store = StateType<typeof rootReducer>;
  export type Services = ServicesType;

  export interface UniqIq {
    id: Id;
  }

  export type AppActions =
    | AuthActions
    | UserActions
    | UiActions
    | ProjectsActions
    | TasksActions;

  export type AppEpic = Epic<AppActions, AppActions, Store, Services>;
  export type ActionHandler<State, Action> = (state: State, action: ActionType<Action>) => State;

  interface SuccessResponse<T> {
    status: 'SUCCESS';
    data: T;
    error: null;
  };

  interface FailureResponse {
    status: 'FAILURE';
    data: null;
    error: string;
  };

  export type NormalizedResponse<T> = SuccessResponse<T> | FailureResponse;

  export interface ScreensMap {
    Home: undefined;
    Login: undefined;
    Account: undefined;
    SignUp: undefined;
    Projects: undefined;
    UpdatePassword: { password: string };
    NewProject: undefined;
    Project: UniqIq;
    Task: { projectId: Id; id: Id };
  }

  export interface Screens extends Record<string, object | undefined>, ScreensMap {};

  export namespace NodeJs {
    export interface ProcessEnv {
      FIREBASE_API_KEY: string;
      FIREBASE_AUTH_DOMAIN: string;
      FIREBASE_PROJECT_ID: string;
      FIREBASE_STORAGE_BUCKET: string;
      FIREBASE_MESSAGING_SENDER_ID: string;
      FIREBASE_APP_MEASUREMENT_ID: string;
      FIREBASE_APP_ID: string;
      API: string;
    }
  }
}
