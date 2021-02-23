import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface Props {
  height?: number;
}

export const DividerBlock: React.FC<Props> = ({ height = 20 }) => (
  <View style={{ ...styles.dividerBlock, height }}></View>
);
