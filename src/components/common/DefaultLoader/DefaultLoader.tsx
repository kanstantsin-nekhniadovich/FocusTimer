import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { AnimatedCircle } from '../AnimatedCircle';

export const DefaultLoader = () => {
  return (
    <>
      <View style={styles.overlay} />
      <AnimatedCircle />
    </>
  );
};
