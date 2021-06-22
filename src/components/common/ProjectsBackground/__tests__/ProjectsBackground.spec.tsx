import React from 'react';
import { render } from '@testing-library/react-native';

import { ProjectsBackground } from '..';

describe('<ProjectsBackground />', () => {
  it('should match snapshot without any props', () => {
    const tree = render(<ProjectsBackground />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with hideLargeCircle = true prop', () => {
    const tree = render(<ProjectsBackground hideLargeCircle />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
