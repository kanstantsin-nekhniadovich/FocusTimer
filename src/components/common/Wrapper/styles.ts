import { StyleSheet, Platform } from 'react-native';
import { Colors } from '@styles';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: Colors.alabaster,
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  statusBarAdjusting: {
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    paddingBottom: 39,
  },
});
