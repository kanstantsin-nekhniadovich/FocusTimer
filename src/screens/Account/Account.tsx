import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { DividerBlock, OverlayLoader } from '../../components/common';
import { Logout, UserAvatar, Email, Lock } from '../../components/icons';
import { Avatar } from '../../components/Avatar';
import { Field } from './Field';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';
import { getUser, logoutRequest, getIsUserLoading } from '../../ducks';
import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, 'Account'>;
}

export const Account: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isUserLoading = useSelector(getIsUserLoading);

  React.useEffect(() => {
    if (isDefined(user)) {
      return;
    }

    navigation.navigate(Routes.Login);
  }, [user]);

  const onNameChange = React.useCallback(() => {
    console.log('change username');
  }, []);

  const onPasswordChange = React.useCallback(() => {
    console.log('change password');
  }, []);

  const logout = React.useCallback(async () => {
    dispatch(logoutRequest());
    navigation.navigate(Routes.Home);
  }, [navigation]);

  if (!isDefined(user)) {
    return (
      <View style={styles.container}>
        <Text style={styles.notLoginMessage}>User is not login</Text>
      </View>
    );
  }

  return (
    <>
      {isUserLoading && <OverlayLoader />}
      <View style={styles.container}>
        <Text style={styles.title}>My account</Text>
        <DividerBlock height={30} />
        <View style={styles.avatar}><Avatar user={user} /></View>
        <DividerBlock height={45} />
        <Field value={user.name} accessibilityLabel="change your name" onEdit={onNameChange} icon={<UserAvatar />} />
        <Field value={user.email} isEditable={false} disableInput={true} icon={<Email />} />
        <Field
          secureTextEntry
          value=''
          onEdit={onPasswordChange}
          disableInput={true}
          isEditable={true}
          icon={<Lock />}
          placeholder='************'
        />
        <DividerBlock height={185} />
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Logout />
          <Text style={styles.logoutButtonLabel}>Log out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
