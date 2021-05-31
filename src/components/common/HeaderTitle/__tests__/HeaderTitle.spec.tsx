import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';

import { HeaderTitle } from '../HeaderTitle';

const title = 'Test title';

const renderComponent = (): RenderAPI => {
  return render(<HeaderTitle title={title} />);
};

describe('HeaderTitle', () => {
  it('should match snapshot', () => {
    const component = renderComponent();
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render HeaderTitle with passed title', () => {
    const { getByText } = renderComponent();

    expect(getByText(title)).toBeDefined();
  });
});
