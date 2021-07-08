import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    marginRight: 4,
  },
  button: {
    width: 32,
    height: 32,
    marginRight: 6,
  },
  confirmMessage: {
    ...Typography.message,
    lineHeight: 20,
    color: Colors.white,
  }
});
