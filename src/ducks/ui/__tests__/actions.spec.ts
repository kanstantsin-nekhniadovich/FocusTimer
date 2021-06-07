import { createStore } from '../../../utils/testStore';
import { initialState } from '../reducer';

import {
  readUserSkippedLoginFlow,
  setUserSkippedLoginFlowRequest,
  setUserSkippedLoginFlowSuccess,
  showAlert,
  hideAlert
} from '../actions';

describe('UI actions', () => {
  let store: Record<Unrestricted, Unrestricted>;

  beforeEach(() => {
    store = createStore(initialState);
  });

  it('readUserSkippedLoginFlow', () => {
    store.dispatch(readUserSkippedLoginFlow());

    const actions = store.getActions();
    const expectedActions = [readUserSkippedLoginFlow()];
    expect(actions).toEqual(expectedActions);
  });

  it('setUserSkippedLoginFlowRequest', () => {
    store.dispatch(setUserSkippedLoginFlowRequest(false));

    const actions = store.getActions();
    const expectedActions = [setUserSkippedLoginFlowRequest(false)];
    expect(actions).toEqual(expectedActions);
  });

  it('setUserSkippedLoginFlowSuccess', () => {
    store.dispatch(setUserSkippedLoginFlowSuccess(false));

    const actions = store.getActions();
    const expectedActions = [setUserSkippedLoginFlowSuccess(false)];
    expect(actions).toEqual(expectedActions);
  });

  it('showAlert', () => {
    store.dispatch(showAlert({ message: 'Error', type: 'error' }));

    const actions = store.getActions();
    const expectedActions = [showAlert({ message: 'Error', type: 'error' })];
    expect(actions).toEqual(expectedActions);
  });

  it('hideAlert', () => {
    store.dispatch(hideAlert());

    const actions = store.getActions();
    const expectedActions = [hideAlert()];
    expect(actions).toEqual(expectedActions);
  });
});
