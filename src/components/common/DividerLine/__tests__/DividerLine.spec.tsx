import React from 'react';
import { render } from '@testing-library/react-native';

import { DividerLine } from '..';

describe('<DividerLine />', () => {
  it('show match snapshot', () => {
    const tree = render(<DividerLine />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
