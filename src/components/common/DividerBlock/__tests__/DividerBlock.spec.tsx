import React from 'react';
import { render } from '@testing-library/react-native';

import { DividerBlock } from '..';

const HEIGHT = 100;

describe('<DividerBlock />', () => {
  it('test DividerBlock snapshot', () => {
    const tree = render(<DividerBlock />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render DividerBlock with passed height in props', () => {
    const { container } = render(<DividerBlock height={HEIGHT} />);

    expect(container.props.height).toEqual(HEIGHT);
  });
});
