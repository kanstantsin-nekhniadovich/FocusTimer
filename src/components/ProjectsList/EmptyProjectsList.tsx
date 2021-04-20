import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export const EmptyProjectsList = () =>
  <Text style={styles.emptyList}>Projects are not found</Text>;
