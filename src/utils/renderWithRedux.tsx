import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import { configureStore } from '../store';

export const renderWithRedux = (component: JSX.Element, initialState?: Partial<Store>) => {
  const store = configureStore(initialState);

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
