import React from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { DividerBlock, OverlayLoader, IconButton, Wrapper } from '../../components/common';
import { Logout} from '../../components/icons';
import { EditUserDetails } from '../../components/EditUserDetails';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';
import { getUser, logoutRequest, getIsUserLoading } from '../../ducks';
import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Account>;
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

  const logout = React.useCallback(async () => {
    dispatch(logoutRequest());
    navigation.navigate(Routes.Login);
  }, [navigation]);

  if (!isDefined(user)) {
    return <OverlayLoader />;
  }

  return (
    <>
      {isUserLoading && <OverlayLoader />}
      <Wrapper style={styles.wrapper}>
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
      </Wrapper>
    </>
  );
};
