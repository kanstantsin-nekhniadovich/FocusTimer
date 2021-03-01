import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { Routes } from '../../routes';
import { WelcomeHeader, Elipse56 } from '../../components/icons';
import { DividerBlock, DividerLine, PrimaryButton, OverlayLoader, Wrapper } from '../../components/common';
import { SignUpForm } from '../../components/SignUpForm';
import { SkipButton } from '../../components/SkipButton';
import { getIsUserLoading, createFacebookUserRequest } from '../../ducks';
import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.SignUp>;
}

export const SignUp: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsUserLoading);
  const signUpWithFacebook = React.useCallback(() => {
    dispatch(createFacebookUserRequest());
  }, []);

  return (
    <>
      {isLoading && <OverlayLoader />}
      <Wrapper>
        <DividerBlock height={35} />
        <WelcomeHeader />
        <DividerBlock height={42} />
        <View style={styles.elipse56}><Elipse56 /></View>
        <View style={styles.skipButtonHolder}><SkipButton navigation={navigation} /></View>
        <Text style={styles.message}>Don&#39;t miss the opportunity. Sign up to create your project.</Text>
        <DividerBlock height={14} />
        <SignUpForm />
        <DividerBlock />
        <DividerLine />
        <DividerBlock />
        <PrimaryButton title="Sign up with facebook" onPress={signUpWithFacebook} variant={'social'} />
      </Wrapper>
    </>
  );
};
