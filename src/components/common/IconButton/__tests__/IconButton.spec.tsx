import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { IconButton } from '..';

describe('<IconButton />', () => {
  it('should render IconButton component', () => {
    const { container } = render(<IconButton
      accessibilityLabel="accessibility label"
      onPress={() => {}}
    />);

    expect(container).toBeDefined();
  });

  it('should fire onPress handler', () => {
    const onPress = jest.fn(() => true);
    const { container } = render(<IconButton
      accessibilityLabel="accessibility label"
      onPress={onPress}
      disabled={false}
    />);

    fireEvent.press(container);
    expect(onPress).toHaveBeenCalled();
  });

  it('should not fire onPress handler if button is disabled', () => {
    const onPress = jest.fn(() => true);
    const { container } = render(<IconButton
      accessibilityLabel="accessibility label"
      onPress={onPress}
      disabled
    />);

    fireEvent.press(container);
    expect(onPress).toHaveBeenCalled();
  });
});
