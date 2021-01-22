import { StyleSheet, Dimensions } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
  },
  title: {
    ...Typography.h3,
    color: Colors.prussianBlue,
    textAlign: 'center',
    height: 72,
    width: 300,
  },
  message: {
    width: 240,
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    letterSpacing: -0.35,
    lineHeight: 18,
    color: Colors.doveGray,
    textAlign: 'center',
  },
});
