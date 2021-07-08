import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

import { styles } from './styles';

interface Props {
  title: string;
  style?: StyleProp<TextStyle>;
}

export const HeaderTitle: React.FC<Props> = ({ title, style }) =>
  <Text numberOfLines={1} style={[styles.title, style]}>{title}</Text>;
