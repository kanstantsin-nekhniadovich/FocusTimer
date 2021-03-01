import { StyleSheet, Dimensions, Platform } from 'react-native';

const height = Dimensions.get('screen').height;
const isIOS = Platform.OS === 'ios';

export const styles = StyleSheet.create({
  elipse16: {
    position: 'absolute',
    top: 70,
    right: -8,
    transform: [{ rotate: '-3deg' }],
  },
  elipse17: {
    position: 'absolute',
    top: 80,
    left: 84,
    transform: [{ rotate: '7deg' }],
  },
  elipse18: {
    position: 'absolute',
    top: 72,
    left: 0,
    transform: [{ rotate: '10deg' }],
  },
  elipse274: {
    position: 'absolute',
    bottom: 0.10 * height,
    left: 0,
  },
  count7: {
    position: 'absolute',
    right: 0,
    bottom: (isIOS ? 0.14 : 0.10) * height,
  },
});
