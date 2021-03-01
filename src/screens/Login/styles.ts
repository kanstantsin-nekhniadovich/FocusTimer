import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  message: {
    ...Typography.text,
    letterSpacing: 0,
    color: Colors.prussianBlue,
  },
  text: {
    ...Typography.text,
    color: Colors.doveGray,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  elipse56: {
    position: 'absolute',
    top: 76,
    right: 0,
  },
  skipButtonHolder: {
    position: 'absolute',
    top: 117,
    right: 4,
  },
});
