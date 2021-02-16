import React from 'react';
import { View } from 'react-native';

import { Elipse16, Elipse17, Elipse18 } from '../../icons';
import { styles } from './styles';

export const LinesBackground: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.elipse16}><Elipse16 /></View>
      <View style={styles.elipse17}><Elipse17 /></View>
      <View style={styles.elipse18}><Elipse18 /></View>
    </View>
  );
};
