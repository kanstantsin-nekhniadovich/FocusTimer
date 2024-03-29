import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  message: {
    ...Typography.message,
    width: '80%',
    letterSpacing: 0,
    lineHeight: 20,
    color: Colors.prussianBlue,
    alignSelf: 'flex-start',
  },
  elipse56: {
    position: 'absolute',
    top: 40,
    right: 0,
  },
  skipButtonHolder: {
    position: 'absolute',
    top: 80,
    right: 4,
  },
});
