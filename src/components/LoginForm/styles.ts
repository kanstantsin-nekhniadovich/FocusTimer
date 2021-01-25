import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    ...Typography.text,
    color: Colors.doveGray,
    height: 18,
  },
});
