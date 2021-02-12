import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { DividerBlock, OverlayLoader, IconButton } from '../../components/common';
import { Logout} from '../../components/icons';
import { EditUserDetails } from '../../components/EditUserDetails';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';
import { getUser, logoutRequest, getIsUserLoading, getIsFacebookAuth, facebookLogoutRequest } from '../../ducks';
import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Account>;
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
    navigation.navigate(Routes.Login);
  }, [navigation, isFacebookAuth]);

  if (!isDefined(user)) {
    return <OverlayLoader />;
  }

  return (
    <>
      {isUserLoading && <OverlayLoader />}
      <View style={styles.container}>
        <EditUserDetails user={user} />
        <DividerBlock height={170} />
        <IconButton
          accessibilityLabel="Logout"
          onPress={logout}
          style={styles.logoutButton}
        >
          <Logout />
          <Text style={styles.logoutButtonLabel}>Log out</Text>
        </IconButton>
      </View>
    </>
  );
};
