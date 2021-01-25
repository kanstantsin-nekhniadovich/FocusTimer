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
    ...Typography.text,
    width: 240,
    color: Colors.doveGray,
    textAlign: 'center',
  },
});
