import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { AnimatedCircle } from '../AnimatedCircle';

interface Props {
  variant?: 'fullscreen' | 'small';
}

const CIRCLE_SMALL_WIDTH = 18;

export const OverlayLoader: React.FC<Props> = ({ variant = 'fullscreen' }) => {
  const circleWidth = variant === 'small' ? CIRCLE_SMALL_WIDTH : undefined;

  return (
    <>
      <View style={styles.overlay} />
      <AnimatedCircle width={circleWidth} />
    </>
  );
};
