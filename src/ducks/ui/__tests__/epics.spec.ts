
import * as actions from '../actions';
import { initApplicationRequestEpic, initApplicationSuccessEpic } from '../epics';
import { testEpic } from '../../../utils/testEpics';

jest.mock('../../user', () => ({
  fetchUserDataRequest: () => ({ type: 'user/FETCH_USER_DATA_REQUEST', payload: undefined }),
}));

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
  it('initApplicationRequestEpic', (done: jest.DoneCallback) => {
    const readUserSkippedLoginFlowSpy = jest.spyOn(actions, 'readUserSkippedLoginFlow');
    const expectedActions = [actions.readUserSkippedLoginFlow(), { type: 'user/FETCH_USER_DATA_REQUEST', payload: undefined }];

    const epicTestRunner = testEpic({
      epic: initApplicationRequestEpic,
      actionsToInvoke: [actions.initApplicationRequest()],
      state,
      count: expectedActions.length,
    });

    epicTestRunner((actions: AppActions[]) => {
      expect(actions).toEqual(expectedActions);
      expect(readUserSkippedLoginFlowSpy).toHaveBeenCalled();
      readUserSkippedLoginFlowSpy.mockReset();
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
        { type: 'user/FETCH_USER_DATA_SUCCESS', payload: { id: '1', name: 'test', avatarUrl: '', email: '' } },
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
});
