import { Epic } from 'redux-observable';
import { TestActions, TestReducer } from '../ducks';

declare global {
  export type AppActions = TestActions;

  export interface Store {
    test: TestReducer;
  }
  
  export type AppEpic = Epic<AppActions, AppActions, Store, unknown>;
}
