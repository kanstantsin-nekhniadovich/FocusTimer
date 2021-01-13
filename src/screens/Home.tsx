import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { PrimaryButton } from '../components/common';
import { Common, Typography } from '@styles';

import { StackNavigationScreens } from '../../App';

const styles = StyleSheet.create({
  container: {
    ...Common.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props {
  navigation: StackNavigationProp<StackNavigationScreens, 'Home'>;
}

export const Home: React.FC<Props> = ({ navigation }) => {

  const onPress = React.useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={Typography.subtitleSmall}>Home Screen</Text>
      <PrimaryButton title="Log In" onPress={onPress} variant="outlined" />
    </View>
  );
};
