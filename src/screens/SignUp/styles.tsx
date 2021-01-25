import { StyleSheet } from 'react-native';
import { Common, Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  container: {
    ...Common.container,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 17,
  },
  message: {
    ...Typography.message,
    letterSpacing: 0,
    lineHeight: 20,
    color: Colors.prussianBlue,
  },
});
