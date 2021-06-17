import { StyleSheet } from 'react-native';
import { Typography } from '@styles';

export const styles = StyleSheet.create({
  tasksList: {
    flex: 1,
  },
  header: {
    ...Typography.subtitleLarge,
    textAlign: 'center'
  },
  list: {
    maxHeight: '80%',
  }
});
