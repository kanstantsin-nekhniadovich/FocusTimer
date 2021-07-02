import { StyleSheet } from 'react-native';
import { Common } from '@styles';

export const styles = StyleSheet.create({
  form: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 26,
    paddingLeft: 38,
  },
  error: {
    ...Common.error,
    position: 'absolute',
    left: 40,
    bottom: -20,
  },
  disabledButton: {
    opacity: 0.4,
  }
});
