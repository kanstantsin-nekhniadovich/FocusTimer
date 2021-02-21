import { ActionType, StateType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { rootReducer } from '../ducks';
import { AuthActions, UserActions, UiActions, ProjectsActions } from '../ducks';
import { Services } from '../graphql/services';

declare global {
  export type Id = string;
  export type Store = StateType<typeof rootReducer>;

  export type AppActions = 
    | AuthActions
    | UserActions
    | UiActions
    | ProjectsActions;

  export type AppEpic = Epic<AppActions, AppActions, Store, Services>;
  export type ActionHandler<State, Action> = (state: State, action: ActionType<Action>) => State;
  
  type SuccessResponse<T> = {
    status: 'SUCCESS';
    data: T;
    error: null,
  }
  
  type FailureResponse = {
    status: 'FAILURE';
    data: null,
    error: string;
  }
  
  export type NormalizedResponse<T> = SuccessResponse<T> | FailureResponse;

  export type Screens = {
    Home: undefined;
    Login: undefined;
    Account: undefined;
    SignUp: undefined;
    Projects: undefined;
    UpdatePassword: { password: string };
    NewProject: undefined;
    Project: { id: string };
  }

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
