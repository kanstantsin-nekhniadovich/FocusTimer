import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { DividerBlock } from '../../components/common';
import { Logout, UserAvatar, Email, Lock } from '../../components/icons';
import { Avatar } from '../../components/Avatar';
import { Field } from './Field';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';
import { getUser } from '../../ducks';
import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, 'Account'>;
}

export const Account: React.FC<Props> = ({ navigation }) => {
  const user = useSelector(getUser);

  React.useEffect(() => {
    if (isDefined(user)) {
      return;
    }

    navigation.navigate(Routes.Login);
  }, [user]);

  if (!isDefined(user)) {
    return (
      <View style={styles.container}>
        <Text style={styles.notLoginMessage}>User is not login</Text>
      </View>
    );
  }

  const onNameChange = React.useCallback(() => {
    console.log('change username');
  }, []);

  const onPasswordChange = React.useCallback(() => {
    console.log('change password');
  }, []);

  return (
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
      <TouchableOpacity style={styles.logoutButton}>
        <Logout />
        <Text style={styles.logoutButtonLabel}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};
