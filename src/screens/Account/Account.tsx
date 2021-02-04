import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { Colors } from '@styles';

import { DividerBlock, OverlayLoader, IconButton } from '../../components/common';
import { Logout, Email } from '../../components/icons';
import { Avatar } from '../../components/Avatar';
import { EditUserDetails } from '../../components/EditUserDetails';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';
import { getUser, logoutRequest, getIsUserLoading, getIsFacebookAuth, facebookLogoutRequest } from '../../ducks';
import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, 'Account'>;
}

export const Account: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isFacebookAuth = useSelector(getIsFacebookAuth);
  const isUserLoading = useSelector(getIsUserLoading);

  React.useEffect(() => {
    if (isDefined(user)) {
      return;
    }

    navigation.navigate(Routes.Login);
  }, [user]);

  const logout = React.useCallback(async () => {
    isFacebookAuth ? dispatch(facebookLogoutRequest()) : dispatch(logoutRequest());
    navigation.navigate(Routes.Home);
  }, [navigation, isFacebookAuth]);

  if (!isDefined(user)) {
    return (
      <View style={styles.container}>
        <Text style={styles.notLoginMessage}>User is not logged in</Text>
      </View>
    );
  }

  return (
    <>
      {isUserLoading && <OverlayLoader />}
      <View style={styles.container}>
        <DividerBlock height={50} />
        <View style={styles.avatar}><Avatar user={user} /></View>
        <DividerBlock height={25} />
        <View style={styles.emailHolder}>
          <Email width={16} color={Colors.doveGray} />
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <DividerBlock height={60} />
        <EditUserDetails user={user} />
        <DividerBlock height={170} />
        <IconButton
          accessibilityLabel="Logout"
          handleClick={logout}
          style={styles.logoutButton}
        >
          <Logout />
          <Text style={styles.logoutButtonLabel}>Log out</Text>
        </IconButton>
      </View>
    </>
  );
};
