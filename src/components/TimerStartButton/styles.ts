import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  button: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
    shadowColor: 'rgba(41, 52, 208, 0.2)',
    shadowOffset: { height: 15, width: 15 },
    shadowOpacity: 0.2,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 27,
    transform: [{ rotate: '180deg' }],
  },
  label: {
    ...Typography.subtitleLarge,
    fontSize: 14,
    color: Colors.white,
  },
});
