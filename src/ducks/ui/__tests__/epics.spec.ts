import * as actions from '../actions';
import { initApplicationRequestEpic, initApplicationSuccessEpic, getUserSkippedLoginFlowEpic, setUserSkippedLoginFlowEpic } from '../epics';
import { testEpic } from '../../../utils/testEpics';
import { getItem, storeItem } from '../../../services/storage';
import { fetchUserDataSuccess, fetchUserDataRequest } from '../../user';

jest.mock('../../../services/storage');
jest.mock('../../user', () => {
  const fetchUserDataSuccessAction = () => ({ type: 'user/FETCH_USER_DATA_SUCCESS', payload: { } });
  fetchUserDataSuccessAction.getType = () => 'user/FETCH_USER_DATA_SUCCESS';

  const fetchUserDataFailuresAction = () => ({ type: 'user/FETCH_USER_DATA_FAILURE' });
  fetchUserDataFailuresAction.getType = 'user/FETCH_USER_DATA_FAILURE';

  return {
    fetchUserDataRequest: () => ({ type: 'user/FETCH_USER_DATA_REQUEST' }),
    fetchUserDataSuccess: fetchUserDataSuccessAction,
    fetchUserDataFailure: fetchUserDataFailuresAction,
  };
});

jest.mock('../../../services/facebook', () => ({
  initializeFacebook: jest.fn(),
}));

jest.mock('../../../services/firebase', () => ({
  isFirebaseInitialized: jest.fn(),
  initializeFirebase: jest.fn(),
}));

const state = {
  isApplicationInited: false,
  isUserSkippedLoginFlow: false,
  alert: {
    isVisible: false,
    type: 'success',
    message: '',
  },
};

describe('UI epics', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('initApplicationRequestEpic', (done: jest.DoneCallback) => {
    const readUserSkippedLoginFlowSpy = jest.spyOn(actions, 'readUserSkippedLoginFlow');
    const expectedActions = [actions.readUserSkippedLoginFlow(), fetchUserDataRequest()];

    const epicTestRunner = testEpic({
      epic: initApplicationRequestEpic,
      actionsToInvoke: [actions.initApplicationRequest()],
      state,
      count: expectedActions.length,
    });

    epicTestRunner((actions: AppActions[]) => {
      expect(actions).toEqual(expectedActions);
      expect(readUserSkippedLoginFlowSpy).toHaveBeenCalled();
      done();
    });
  });

  it('initApplicationSuccessEpic', (done: jest.DoneCallback) => {
    const initApplicationSuccessSpy = jest.spyOn(actions, 'initApplicationSuccess');
    const expectedActions = [actions.initApplicationSuccess()];

    const epicTestRunner = testEpic({
      epic: initApplicationSuccessEpic,
      actionsToInvoke: [
        actions.setUserSkippedLoginFlowSuccess(true),
        fetchUserDataSuccess({ id: '1', name: 'test', avatarUrl: '', email: '' }),
      ],
      state,
      count: expectedActions.length,
    });

    epicTestRunner((actions: AppActions[]) => {
      expect(actions).toEqual(expectedActions);
      expect(initApplicationSuccessSpy).toHaveBeenCalled();
      done();
    });
  });

  it('getUserSkippedLoginFlowEpic', (done: jest.DoneCallback) => {
    const isSkipped = true;
    (getItem as jest.Mock).mockReturnValue(isSkipped);
    const setUserSkippedLoginFlowSuccessSpy = jest.spyOn(actions, 'setUserSkippedLoginFlowSuccess');
    const expectedActions = [actions.setUserSkippedLoginFlowSuccess(isSkipped)];

    const epicTestRunner = testEpic({
      epic: getUserSkippedLoginFlowEpic,
      actionsToInvoke: [actions.readUserSkippedLoginFlow()],
      state,
      count: expectedActions.length,
    });

    epicTestRunner((actions: AppActions[]) => {
      expect(actions).toEqual(expectedActions);
      expect(setUserSkippedLoginFlowSuccessSpy).toHaveBeenCalled();
      done();
    });
  });

  it('setUserSkippedLoginFlowEpic', (done: jest.DoneCallback) => {
    const isSkipped = false;
    (storeItem as jest.Mock).mockReturnValue(isSkipped);
    const setUserSkippedLoginFlowSuccessSpy = jest.spyOn(actions, 'setUserSkippedLoginFlowSuccess');
    const expectedActions = [actions.setUserSkippedLoginFlowSuccess(isSkipped)];

    const epicTestRunner = testEpic({
      epic: setUserSkippedLoginFlowEpic,
      actionsToInvoke: [actions.setUserSkippedLoginFlowRequest(isSkipped)],
      state,
      count: expectedActions.length,
    });

    epicTestRunner((actions: AppActions[]) => {
      expect(actions).toEqual(expectedActions);
      expect(setUserSkippedLoginFlowSuccessSpy).toHaveBeenCalled();
      done();
    });
  });
});
