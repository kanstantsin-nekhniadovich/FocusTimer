import React from 'react';
import { User } from '@typings';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { usePermissions, MEDIA_LIBRARY } from 'expo-permissions';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { isDefined } from '../../utils/isDefined';
import { isPermissionGranted } from '../../utils/isPermissionsGranted';
import { Camera } from '../icons';
import { saveUserAvatarRequest } from '../../ducks';
import { uploadImageFromMediaLibrary, isMediaUploadCancelledGuard } from '../../utils/uploadImageFromMediaLibrary';

interface Props {
  user: User;
}

export const Avatar: React.FC<Props> = ({ user }) => {
  const [permission] = usePermissions(MEDIA_LIBRARY, { ask: true }); // TODO maybe ask all permissions in the beginning?
  const dispatch = useDispatch();

  const storeAvatar = React.useCallback(async () => {  
    if (!isPermissionGranted(permission)) {
      alert('Hey! You have to enable Storage permissions to set avatar.');
      return;
    }

    const media = await uploadImageFromMediaLibrary();

    if (isMediaUploadCancelledGuard(media)) {
      return;
    }

    dispatch(saveUserAvatarRequest(media.uri));
  }, [user, permission]);

  const firstLetter = React.useMemo(() => user.email.charAt(0), [user]);

  return (
    <View style={styles.avatarHolder}>
      {isDefined(user.avatarUrl)
        ? <Image style={styles.avatar} source={{ uri: user.avatarUrl }} />
        : <>
          <LinearGradient
            colors={['rgba(129, 140, 223, 0.45)', 'rgba(110, 120, 198, 0.888211)', 'rgba(84, 96, 182, 0.45)', '#001F5A', '#6E78C6']}
            start={[0, 0]}
            end={[1, 1]}
            locations={[0, 0.0001, 0.0002, 0.6802, 1]}
            style={{ ...styles.avatar, ...styles.fakeAvatar}}/>
          <Text style={styles.userNameLetter}>{firstLetter}</Text>
        </>}
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={storeAvatar}
        accessibilityLabel="Upload avatar"
        activeOpacity={0.7}
      >
        <Camera />
      </TouchableOpacity>
    </View>
  );
};
