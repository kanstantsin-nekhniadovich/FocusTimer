import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Common, Typography } from '@styles';

import { getUser } from '../ducks';
import { PrimaryButton, DividerBlock } from '../components/common';
import { Routes } from '../routes';
import { isDefined } from '../utils/isDefined';

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
  const user = useSelector(getUser);

  React.useEffect(() => {
    if (!isDefined(user)) {
      return;
    }

    navigation.navigate(Routes.Account);
  }, [user]);

  const navigateToLogin = React.useCallback(() => {
    navigation.navigate(Routes.Login);
  }, []);

  const navigateToAccount = React.useCallback(() => {
    navigation.navigate(Routes.Account);
  }, []);

  const navigateToProjects = React.useCallback(() => {
    navigation.navigate('Projects');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={Typography.subtitleSmall}>Home Screen</Text>
      <PrimaryButton title="Log In" onPress={navigateToLogin} variant="outlined" />
      <DividerBlock height={21} />
      <PrimaryButton title="Account" onPress={navigateToAccount} variant="social" />
      <DividerBlock />
      <PrimaryButton title="Projects" onPress={navigateToProjects} />
    </View>
  );
};
