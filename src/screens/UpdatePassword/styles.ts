import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    paddingTop: 30,
  },
  header: {
    ...Typography.h3,
    color: Colors.prussianBlue,
  },
  message: {
    ...Typography.message,
    width: '80%',
    color: Colors.doveGray,
    alignSelf: 'flex-start',
  },
});
