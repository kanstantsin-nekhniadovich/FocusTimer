import { TestActions, TestReducer } from '../ducks';

declare global {
  export type Actions = TestActions;

  export interface Store {
    test: TestReducer;
  }
}
