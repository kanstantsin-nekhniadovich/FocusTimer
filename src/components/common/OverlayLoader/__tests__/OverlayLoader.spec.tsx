import React from 'react';
import { render } from '@testing-library/react-native';

import { OverlayLoader } from '..';

describe('<OverlayLoader>', () => {
  it('should be rendered with default props', () => {
    const tree = render(<OverlayLoader />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
