import { StyleSheet, Dimensions, Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    zIndex: -1,
  },
  elipse274: {
    position: 'absolute',
    bottom: 0.10 * Dimensions.get('screen').height,
    left: 0,
  },
  count7: {
    position: 'absolute',
    right: 0,
    bottom: (isIOS ? 0.14 : 0.1) * Dimensions.get('screen').height,
  },
});
