import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  error: {
    ...Typography.text,
    color: Colors.error,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    ...Typography.text,
    color: Colors.doveGray,
    height: 18,
  },
  invalidInput: {
    borderColor: Colors.error,
  },
  message: {
    ...Typography.text,
    color: Colors.prussianBlue,
  },
});
