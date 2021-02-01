import { StyleSheet } from 'react-native';
import { Common, Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  container: {
    ...Common.container,
    ...Common.statusBarAdjusting,
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingTop: 37,
  },
  message: {
    ...Typography.text,
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
