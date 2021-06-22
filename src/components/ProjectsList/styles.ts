import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  list: {
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  emptyList: {
    ...Typography.message,
    paddingTop: 5,
    color: Colors.prussianBlue,
    fontSize: 16,
    textAlign: 'center',
  },
});
