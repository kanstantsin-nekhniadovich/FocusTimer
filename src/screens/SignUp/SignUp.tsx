import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { Routes } from '../../routes';
import { WelcomeHeader } from '../../components/icons';
import { DividerBlock, DividerLine, PrimaryButton, OverlayLoader } from '../../components/common';
import { SignUpForm } from '../../components/SignUpForm';
import { getUser, getIsUserLoading, createFacebookUserRequest } from '../../ducks';
import { isDefined } from '../../utils/isDefined';
import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.SignUp>;
}

export const SignUp: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isLoading = useSelector(getIsUserLoading);
  const signUpWithFacebook = React.useCallback(() => {
    dispatch(createFacebookUserRequest());
  }, []);

  React.useEffect(() => {
    if (!isDefined(user)) {
      return;
    }

    navigation.navigate(Routes.Account);
  }, [user, navigation]);

  return (
    <>
      {isLoading && <OverlayLoader />}
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
    </>
  );
};
