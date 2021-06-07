import React from 'react';
import { render } from '@testing-library/react-native';

import { Wrapper } from '..';

describe('<Wrapper />', () => {
  it('show match snapshot', () => {
    const tree = render(<Wrapper />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
