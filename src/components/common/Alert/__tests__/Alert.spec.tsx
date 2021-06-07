import React from 'react';
import { act } from '@testing-library/react-native';
import { Colors } from '@styles';

import { renderWithRedux } from '../../../../utils/renderWithRedux';
import { getAlertMeta, hideAlert, showAlert } from '../../../../ducks/ui';
import { Alert } from '../Alert';

jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      firebaseApiKey: ''
    },
  }
}));

describe('<Alert />', () => {
  it('should render Alert component with initial isVisible=false', () => {
    const { store } = renderWithRedux(<Alert />);
    const alertMeta = getAlertMeta(store.getState());
    expect(alertMeta.isVisible).toEqual(false);
  });

  it('should show Alert component with error message', async () => {
    const { store, getByText, getByTestId } = renderWithRedux(<Alert />);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    act(() => {
      store.dispatch(showAlert({ message: 'Error message', type: 'error' }));
    });

    const crossIcon = getByTestId('cross-icon');
    const alertText = getByText('Error message');

    const alertMeta = getAlertMeta(store.getState());
    expect(alertMeta.isVisible).toEqual(true);
    expect(alertText).toBeDefined();
    expect(crossIcon.props.style.borderColor).toEqual(Colors.error);
  });

  it('should show Alert component with success message', async () => {
    const { store, getByText, getByTestId } = renderWithRedux(<Alert />);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    act(() => {
      store.dispatch(showAlert({ message: 'Success message', type: 'success' }));
    });

    const crossIcon = getByTestId('cross-icon');
    const alertText = getByText('Success message');

    const alertMeta = getAlertMeta(store.getState());
    expect(alertMeta.isVisible).toEqual(true);
    expect(alertText).toBeDefined();
    expect(crossIcon.props.style.borderColor).toEqual(Colors.success);
  });

  it('should hide Alert component', async () => {
    const { store, getByTestId } = renderWithRedux(<Alert />, {
      ui: {
        isApplicationInited: true,
        isUserSkippedLoginFlow: false,
        alert: {
          message: 'Test message',
          isVisible: true,
          type: 'error'
        }
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    act(() => {
      store.dispatch(hideAlert());
    });

    const alertMeta = getAlertMeta(store.getState());
    const crossIcon = getByTestId('cross-icon');
    const alertMessage = getByTestId('alert-message');
    expect(alertMeta.isVisible).toEqual(false);
    expect(alertMessage.children).toEqual(['']);
    expect(crossIcon.props.style.borderColor).toEqual(Colors.success);
  });
});
