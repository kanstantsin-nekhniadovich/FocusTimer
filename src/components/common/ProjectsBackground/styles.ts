import { StyleSheet, Dimensions, Platform } from 'react-native';

const height = Dimensions.get('screen').height;
const isIOS = Platform.OS === 'ios';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    zIndex: -1,
  },
  elipse274: {
    position: 'absolute',
    bottom: 0.10 * height,
    left: 0,
  },
  count7: {
    position: 'absolute',
    right: 0,
    bottom: (isIOS ? 0.14 : 0.1) * height,
  },
});