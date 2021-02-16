import React from 'react';
import { Text } from 'react-native';
import { Typography } from '@styles';

interface Props {
  title: string;
}

export const HeaderTitle: React.FC<Props> = ({ title }) =>
  <Text numberOfLines={1} style={Typography.h3}>{title}</Text>;
