import React from 'react';
import { View, Text } from 'react-native';

import { WelcomeHeader } from '../../components/icons';
import { DividerBlock, DividerLine, PrimaryButton } from '../../components/common';
import { SignUpForm } from '../../components/SignUpForm';
import { styles } from './styles';

export const SignUp = () => {

  const signUpWithFacebook = React.useCallback(() => {
    console.log('sign up with facebook');
  }, []);

  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <DividerBlock height={42} />
      <Text style={styles.message}>Don&#39;t miss the opportunity. Sign up to create your project.</Text>
      <DividerBlock height={14} />
      <SignUpForm />
      <DividerBlock />
      <DividerLine />
      <DividerBlock />
      <PrimaryButton title="Sign up with facebook" onPress={signUpWithFacebook} variant={'social'} />
    </View>
  );
};
