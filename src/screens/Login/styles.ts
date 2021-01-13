import { StyleSheet, Platform, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Colors } from '@styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: Dimensions.get('screen').height,
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    paddingBottom: 39,
    paddingHorizontal: 17,
    paddingTop: 37,
  },
});
