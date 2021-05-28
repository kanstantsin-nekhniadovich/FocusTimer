import { render } from '../../../utils/testsUtils';

import { LoginForm } from '../LoginForm';

xdescribe('Login Form', () => {
  beforeAll(() => {
    jest.mock('expo-constants', () => ({
      manifest: {
        extra: {
          // api: process.env.API,
          firebaseApiKey: 'test',
          firebaseAppId: 'test',
          firebaseAuthDomain: 'test',
          firebaseMessagingSenderId: 'test',
          firebaseProjectId: 'test',
          firebaseStorageBucket: 'test',
          firebaseAppMeasurementId: 'test',
        }
      }
    }));
  });

  xit('should render login form', () => {
    const { debug } = render({ component: <LoginForm /> });

    debug();
  });
});
