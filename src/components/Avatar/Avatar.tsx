import React from 'react';
import { User } from '@typings';
import { View, Image, Text, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { usePermissions, MEDIA_LIBRARY } from 'expo-permissions';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { isDefined } from '../../utils/isDefined';
import { isPermissionGranted } from '../../utils/isPermissionsGranted';
import { Camera } from '../icons';
import { IconButton } from '../common';
import { saveUserAvatarRequest } from '../../ducks';
import { uploadImageFromMediaLibrary, isMediaUploadCancelledGuard } from '../../utils/uploadImageFromMediaLibrary';
import { isFirebaseInitialized } from '../../services/firebase';

interface Props {
  user: User;
  isEditable?: boolean;
}

export const Avatar: React.FC<Props> = ({ user, isEditable = true }) => {
  const [permission] = usePermissions(MEDIA_LIBRARY, { ask: true }); // TODO maybe ask all permissions in the beginning?
  const dispatch = useDispatch();
  const animatedOpacity = React.useRef(new Animated.Value(0.4)).current;

  React.useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: isEditable ? 1 : 0.4,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isEditable, animatedOpacity]);

  const storeAvatar = React.useCallback(async () => {
    if (!isEditable || !isFirebaseInitialized()) {
      return;
    }

    if (!isPermissionGranted(permission)) {
      alert('Hey! You have to enable Storage permissions to set avatar.');
      return;
    }

    const media = await uploadImageFromMediaLibrary(200);

    if (isMediaUploadCancelledGuard(media)) {
      return;
    }

    dispatch(saveUserAvatarRequest(media.uri));
  }, [user, permission, isEditable]);

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
            locations={[0, 0.001, 0.002, 0.6802, 1]}
            style={{ ...styles.avatar, ...styles.fakeAvatar }} />
          <Text style={styles.userNameLetter}>{firstLetter}</Text>
        </>}
      <Animated.View style={{ ...styles.cameraButton, opacity: animatedOpacity }}>
        <IconButton
          accessibilityLabel="Upload avatar"
          onPress={storeAvatar}
        >
          <Camera />
        </IconButton>
      </Animated.View>
    </View>
  );
};
