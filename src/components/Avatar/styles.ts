import { StyleSheet } from 'react-native';
import { Colors } from '@styles';

export const styles = StyleSheet.create({
  avatarHolder: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  fakeAvatar: {
    transform: [{ rotate: '-45deg' }],
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  userNameLetter: {
    position: 'absolute',
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 32,
    lineHeight: 41,
    color: Colors.alabaster,
    textTransform: 'capitalize',
  },
});
