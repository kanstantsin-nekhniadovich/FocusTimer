import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { PrimaryButton, DividerLine, DividerBlock, Wrapper } from '../../components/common';
import { FocusTimerHeader, Elipse56 } from '../../components/icons';
import { LoginForm } from '../../components/LoginForm';
import { SkipButton } from '../../components/SkipButton';
import { OverlayLoader } from '../../components/common';
import { getIsUserLoading, facebookLoginRequest } from '../../ducks';
import { styles } from './styles';
import { Routes } from '../../routes';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Login>;
}

export const Login: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsUserLoading);
  const handleFacebookLogIn = React.useCallback(async () => {
    dispatch(facebookLoginRequest());
  }, []);

  const navigateToSignUpScreen = React.useCallback(() => {
    navigation.navigate(Routes.SignUp);
  }, [navigation]);

  return (
    <>
      {isLoading && <OverlayLoader />}
      <Wrapper adjustStatusBar>
        <DividerBlock height={37} />
        <FocusTimerHeader />
        <View style={styles.elipse56}><Elipse56 /></View>
        <View style={styles.skipButtonHolder}><SkipButton navigation={navigation} /></View>
        <DividerBlock height={77} />
        <Text style={styles.message}>Don&#39;t miss the opportunity. Log in to create your project.</Text>
        <DividerBlock height={20} />
        <LoginForm />
        <DividerBlock height={10} />
        <DividerLine />
        <DividerBlock height={10} />
        <PrimaryButton title="Log in with facebook" onPress={handleFacebookLogIn} variant={'social'} />
        <DividerBlock height={28} />
        <Text style={styles.text}>Don&#39;t have an account?</Text>
        <PrimaryButton title="Sign up" onPress={navigateToSignUpScreen} variant={'outlined'} />
      </Wrapper>
    </>
  );
};
