import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const DividerLine = () => (
  <View style={styles.container}>
    <View style={styles.divider}>
      <View style={styles.textHolder}>
        <Text style={styles.text}>or</Text>
      </View>
    </View>
  </View>
);
