import React from 'react';
import { View } from 'react-native';

import { Elipse274, Count7 } from '../../icons';
import { styles } from './styles';

interface Props {
  hideLargeCircle?: boolean;
}

export const ProjectsBackground: React.FC<Props> = ({ hideLargeCircle = false }) => {
  return (
    <View style={styles.container}>
      {!hideLargeCircle && <View style={styles.elipse274}><Elipse274 /></View>}
      <View style={styles.count7}><Count7 /></View>
    </View>
  );
};
