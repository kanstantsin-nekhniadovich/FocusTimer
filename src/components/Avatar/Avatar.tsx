import React from 'react';
import { User } from '@typings';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ExpoImagePicker from 'expo-image-picker';
import { usePermissions, MEDIA_LIBRARY } from 'expo-permissions';
import { useDispatch } from 'react-redux';
import * as ImageManipulator from 'expo-image-manipulator';

import { saveAvatarToStorage } from '../../services/saveAvatarToStorage';
import { styles } from './styles';
import { isDefined } from '../../utils/isDefined';
import { isPermissionGranted } from '../../utils/isPermissionsGranted';
import { Camera } from '../icons';
import { updateUserRequest } from '../../ducks';

interface Props {
  user: User;
}

export const Avatar: React.FC<Props> = ({ user }) => {
  const [imageUrl, setImageUrl] = React.useState(user.avatarUrl);
  const [permission] = usePermissions(MEDIA_LIBRARY, { ask: true }); // TODO maybe ask all permissions in the beginning?
  const dispatch = useDispatch();

  const storeAvatar = React.useCallback(async () => {  
    if (!isPermissionGranted(permission)) {
      alert('Hey! You have to enable Storage permissions to set avatar.');
      return;
    }

    const result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
    });

    if (result.cancelled) {
      return;
    }

    const optimizedResult = await ImageManipulator.manipulateAsync(result.uri,
      [{ resize: { width: 200 } }], { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG });

    const url = await saveAvatarToStorage(user.id, optimizedResult.uri);
    setImageUrl(url);
    dispatch(updateUserRequest({ avatarUrl: url }));
  }, [user, permission]);

  const firstLetter = React.useMemo(() => {
    return user.email.charAt(0);
  }, [user]);

  return (
    <View style={styles.avatarHolder}>
      {isDefined(imageUrl)
        ? <Image style={styles.avatar} source={{ uri: imageUrl }} />
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
