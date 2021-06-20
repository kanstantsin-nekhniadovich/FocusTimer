import React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { UserAvatar } from '../icons/UserAvatar';
import { getUser } from '../../ducks';
import { isDefined } from '../../utils/isDefined';
import { Routes } from '../../routes';
import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Projects>;
}

export const AvatarHeader: React.FC<Props> = ({ navigation }) => {
  const user = useSelector(getUser);

  const accessibilityLabel = isDefined(user) ? 'Navigate to account screen' : 'Navigate to login screen';
  const onPress = () => {
    navigation.navigate(isDefined(user) ? Routes.Account : Routes.Login);
  };

  return (
    <TouchableOpacity onPress={onPress} accessibilityLabel={accessibilityLabel} style={styles.container}>
      {isDefined(user) && isDefined(user.avatarUrl)
        ? <Image style={styles.image} source={{ uri: user.avatarUrl }} />
        : <UserAvatar width={34} />
      }
    </TouchableOpacity>
  );
};
