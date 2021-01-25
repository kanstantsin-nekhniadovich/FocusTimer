import { StyleSheet, Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';
import { Colors } from './colors';
import { Typography } from './typography';

export const Common = StyleSheet.create({
  container: {
    backgroundColor: Colors.alabaster,
    flex: 1,
  },
  statusBarAdjusting: {
    height: Dimensions.get('screen').height,
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    paddingBottom: 39,
  },
  error: {
    ...Typography.text,
    color: Colors.error,
  },
});
