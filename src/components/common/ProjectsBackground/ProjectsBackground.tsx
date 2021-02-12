import React from 'react';
import { View } from 'react-native';

import { Elipse16, Elipse17, Elipse18, Elipse274, Count7 } from '../../icons';
import { styles } from './styles';

export const ProjectsBackground = () => {
  return (
    <View style={styles.container}>
      <View style={styles.elipse16}><Elipse16 /></View>
      <View style={styles.elipse17}><Elipse17 /></View>
      <View style={styles.elipse18}><Elipse18 /></View>
      <View style={styles.elipse274}><Elipse274 /></View>
      <View style={styles.count7}><Count7 /></View>
    </View>
  );
};
