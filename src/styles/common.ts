import { StyleSheet } from 'react-native';
import { Colors } from './colors';
import { Typography } from './typography';

export const Common = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  error: {
    ...Typography.text,
    color: Colors.error,
    alignSelf: 'flex-start',
  },
});
