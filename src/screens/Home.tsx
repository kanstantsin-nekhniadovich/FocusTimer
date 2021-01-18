import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { PrimaryButton, DividerBlock } from '../components/common';
import { Common, Typography } from '@styles';
import { Routes } from '../routes';

const styles = StyleSheet.create({
  container: {
    ...Common.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Home>;
}

export const Home: React.FC<Props> = ({ navigation }) => {
  const navigateToLogin = React.useCallback(() => {
    navigation.navigate(Routes.Login);
  }, []);

  const navigateToAccount = React.useCallback(() => {
    navigation.navigate(Routes.Account);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={Typography.subtitleSmall}>Home Screen</Text>
      <PrimaryButton title="Log In" onPress={navigateToLogin} variant="outlined" />
      <DividerBlock height={21} />
      <PrimaryButton title="Account" onPress={navigateToAccount} variant="social" />
    </View>
  );
};
