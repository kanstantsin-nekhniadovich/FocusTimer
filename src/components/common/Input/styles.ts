import { StyleSheet } from 'react-native';
import { Colors } from '@styles';
import { Typography } from '@styles';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    ...Typography.inputText,
    width: '100%',
    height: 56,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.38)',
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
  label: {
    ...Typography.inputText,
    position: 'absolute',
    color: Colors.black_60,
    backgroundColor: Colors.alabaster,
    borderRadius: 4,
  },
  invalid: {
    borderColor: Colors.error,
  },
  errorIcon: {
    position: 'absolute',
    top: 16,
    right: 8,
  },
});
