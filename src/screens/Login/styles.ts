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
});
