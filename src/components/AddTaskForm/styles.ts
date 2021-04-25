import { StyleSheet } from 'react-native';
import { Common } from '@styles';

export const styles = StyleSheet.create({
  form: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 22,
  },
  error: {
    ...Common.error,
    position: 'absolute',
    left: 22,
    bottom: -20,
  },
});
