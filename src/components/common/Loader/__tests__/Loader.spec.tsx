import React from 'react';
import { render } from '@testing-library/react-native';

import { Loader } from '..';

describe('<LinesBackground />', () => {
  it('show match snapshot', () => {
    const tree = render(<Loader />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
