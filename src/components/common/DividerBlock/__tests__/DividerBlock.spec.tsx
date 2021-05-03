import React from 'react';
import renderer from 'react-test-renderer';

import { DividerBlock } from '..';

const HEIGHT = 100;

describe('<DividerBlock />', () => {
  it('test DividerBlock snapshot', () => {
    const tree = renderer
      .create(<DividerBlock />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render DividerBlock with passed height in props', () => {
    const instance = renderer.create(<DividerBlock height={HEIGHT} />).root;

    expect(instance.props.height).toEqual(HEIGHT);
  });
});
