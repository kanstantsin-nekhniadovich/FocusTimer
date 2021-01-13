import React from 'react';
import { View } from 'react-native';

import { PrimaryButton, DividerLine, DividerBlock } from '../../components/common';
import { FocusTimerHeader } from '../../components/icons';
import { LoginForm } from '../../components/LoginForm';
import { styles } from './styles';

export const Login: React.FC = () => {
  const handleFacebookLogIn = React.useCallback(() => {
    console.log('facebook log in');
  }, []);

  const handleSignUp = React.useCallback(() => {
    console.log('handle sign up');
  }, []);

  return (
    <View style={styles.container}>
      <FocusTimerHeader />
      <DividerBlock height={77} />
      <LoginForm />
      <DividerBlock height={10} />
      <DividerLine />
      <DividerBlock height={10} />
      <PrimaryButton title="Log in with facebook" onPress={handleFacebookLogIn} variant={'social'} />
      <DividerBlock height={28} />
      <PrimaryButton title="Sign up" onPress={handleSignUp} variant={'outlined'} />
    </View>
  );
};
