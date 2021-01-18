import React from 'react';
import { User } from '@typings';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { isDefined } from '../../utils/isDefined';
import { Camera } from '../icons';

interface Props {
  user: User;
}

export const Avatar: React.FC<Props> = ({ user }) => {
  const onPress = React.useCallback(() => {
    console.log('on press');
  }, []);

  const firstLetter = React.useMemo(() => {
    return user.email.charAt(0);
  }, [user]);

  return (
    <View style={styles.avatarHolder}>
      {isDefined(user.avatarUrl)
        ? <Image source={{ uri: user.avatarUrl }} />
        : <>
          <LinearGradient
            colors={['rgba(129, 140, 223, 0.45)', 'rgba(110, 120, 198, 0.888211)', 'rgba(84, 96, 182, 0.45)', '#001F5A', '#6E78C6']}
            start={[0, 0]}
            end={[1, 1]}
            locations={[0, 0.0001, 0.0002, 0.6802, 1]}
            style={{ ...styles.avatar, ...styles.fakeAvatar}} />
          <Text style={styles.userNameLetter}>{firstLetter}</Text>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={onPress}
            accessibilityLabel="Upload avatar"
            activeOpacity={0.7}
          >
            <Camera />
          </TouchableOpacity>
        </>}
    </View>
  );
};
