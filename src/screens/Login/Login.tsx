import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { PrimaryButton, DividerLine, DividerBlock } from '../../components/common';
import { FocusTimerHeader } from '../../components/icons';
import { LoginForm } from '../../components/LoginForm';
import { DefaultLoader } from '../../components/common';
import { getIsUserLoading, getUser } from '../../ducks';
import { styles } from './styles';
import { isDefined } from '../../utils/isDefined';
import { Routes } from '../../routes';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Login>;
}

export const Login: React.FC<Props> = ({ navigation }) => {
  const isLoading = useSelector(getIsUserLoading);
  const user = useSelector(getUser);
  const handleFacebookLogIn = React.useCallback(() => {
    console.log('facebook log in');
  }, []);

  const handleSignUp = React.useCallback(() => {
    console.log('handle sign up');
  }, []);

  React.useEffect(() => {
    if (!isDefined(user) || isLoading) {
      return;
    }

    navigation.navigate(Routes.Account);
  }, [user, isLoading]);

  return (
    <>
      {isLoading && <DefaultLoader />}
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
    </>
  );
};
