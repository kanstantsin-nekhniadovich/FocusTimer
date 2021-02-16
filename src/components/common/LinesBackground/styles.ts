import { StyleSheet, Dimensions } from 'react-native';

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
});
