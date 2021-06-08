import React from 'react';
import { render } from '@testing-library/react-native';

import { ProjectsBackground } from '..';

describe('<ProjectsBackground />', () => {
  it('show match snapshot', () => {
    const tree = render(<ProjectsBackground />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
