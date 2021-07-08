import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';

import { renderWithRedux } from '../../../utils/renderWithRedux';
import * as actions from '../../../ducks/auth/actions';
import { LoginForm } from '..';

jest.mock('../../../ducks/auth/actions');

describe('<LoginForm />', () => {
  beforeEach(() => {
    jest.spyOn(actions, 'loginRequest').mockImplementation(() => ({ type: 'auth/LOGIN_REQUEST', payload: { email: '', password: '' } }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render LoginForm', () => {
    const { container } = renderWithRedux(<LoginForm />);

    expect(container).toBeDefined();
  });

  it('should not fire login request action', async () => {
    const { getByText } = renderWithRedux(<LoginForm />);
    fireEvent.press(getByText('Log In'));

    await waitFor(() => expect(actions.loginRequest).not.toHaveBeenCalled());
  });

  it('should show email is required error', async () => {
    const { getByText, getByPlaceholderText } = renderWithRedux(<LoginForm />);
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(passwordInput, '12321231211');

    fireEvent.press(getByText('Log In'));

    expect(actions.loginRequest).not.toHaveBeenCalled();
    await waitFor(() => expect(getByText('Please enter your email')).toBeDefined());
  });

  it('should show email validation error', async () => {
    const { getByText, getByPlaceholderText } = renderWithRedux(<LoginForm />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(emailInput, 'email');
    fireEvent.changeText(passwordInput, '12321231211');

    fireEvent.press(getByText('Log In'));

    expect(actions.loginRequest).not.toHaveBeenCalled();
    await waitFor(() => expect(getByText('Please enter a valid email')).toBeDefined());
  });

  it('should show password is required error', async () => {
    const { getByText, getByPlaceholderText } = renderWithRedux(<LoginForm />);
    const emailInput = getByPlaceholderText('Email');

    fireEvent.changeText(emailInput, 'email@email.com');

    fireEvent.press(getByText('Log In'));

    expect(actions.loginRequest).not.toHaveBeenCalled();
    await waitFor(() => expect(getByText('Please enter your password')).toBeDefined());
  });

  it('should show password min characters validation error', async () => {
    const { getByText, getByPlaceholderText } = renderWithRedux(<LoginForm />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(passwordInput, '1234567');
    fireEvent.changeText(emailInput, 'email@email.com');

    fireEvent.press(getByText('Log In'));

    expect(actions.loginRequest).not.toHaveBeenCalled();
    await waitFor(() => expect(getByText('Password must be at least 8 characters length')).toBeDefined());
  });

  it('should fire login request action', async () => {
    const { getByText, getByPlaceholderText } = renderWithRedux(<LoginForm />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(emailInput, 'email@email.com');
    fireEvent.changeText(passwordInput, '12345678');

    fireEvent.press(getByText('Log In'));

    await waitFor(() =>
      expect(actions.loginRequest).toHaveBeenCalledWith({ email: 'email@email.com', password: '12345678' }));
  });
});
