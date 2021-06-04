import React from 'react';
import { render } from '@testing-library/react-native';

import { LinesBackground } from '..';

describe('<LinesBackground />', () => {
  it('show match snapshot', () => {
    const tree = render(<LinesBackground />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
