import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export const TimerStartButton = () => {
  const onPress = React.useCallback(() => {
    console.log('onPress');
  }, []);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.5}
    >
      <LinearGradient
        colors={['#343882', '#232CC6']}
        start={[0, 0]}
        end={[1, 1]}
        locations={[0, 1]}
        style={styles.gradient}
      />
      <Text style={styles.label}>25</Text>
    </TouchableOpacity>
  );
};
