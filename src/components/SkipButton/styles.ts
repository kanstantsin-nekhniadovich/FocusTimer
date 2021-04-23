import { StyleSheet } from 'react-native';
import { Typography } from '@styles';

export const styles = StyleSheet.create({
  button: {
    height: 24,
    width: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    ...Typography.subtitleLarge,
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
