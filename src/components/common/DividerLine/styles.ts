import { StyleSheet } from 'react-native';
import { Colors } from '@styles';

export const styles = StyleSheet.create({
  container: {
    height: 16,
    width: '100%',
    justifyContent: 'center',
  },
  divider: {
    alignItems: 'center',
    backgroundColor: Colors.silverChalice,
    height: 1,
    justifyContent: 'center',
  },
  text: {
    color: Colors.silverChalice,
    textTransform: 'uppercase',
  },
  textHolder: {
    width: 58,
    height: 16,
    backgroundColor: Colors.alabaster,
    alignItems: 'center',
  },
});
