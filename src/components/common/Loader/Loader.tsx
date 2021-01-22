import React from 'react';
import { View, Text } from 'react-native';

import { DividerBlock } from '../DividerBlock';
import { AnimatedCircle } from '../AnimatedCircle';

import { styles } from './styles';

interface Props {
  title?: string;
}

export const Loader: React.FC<Props> = ({ title = 'Loading...' }) => {
  return (
    <View style={styles.container}>
      <DividerBlock height={102} />
      <Text style={styles.title}>{title}</Text>
      <DividerBlock height={194} />
      <AnimatedCircle />
      <DividerBlock height={57} />
      <Text style={styles.message}>Please wate, the information is processing.</Text>
    </View>
  );
};
