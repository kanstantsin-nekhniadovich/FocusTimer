import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from '../ducks';

interface Props {
  component: React.ReactElement<Unrestricted>;
  options?: RenderOptions;
}

const render = ({ component, options }: Props) => {
  const store = createStore(rootReducer, {});

  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(component, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react-native';
export { render };
