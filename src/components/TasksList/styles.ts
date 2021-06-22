import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  tasksList: {
    flex: 1,
  },
  header: {
    ...Typography.subtitleSmall,
    fontSize: 18,
    lineHeight: 18,
    paddingLeft: 18,
    marginTop: 25,
    marginBottom: 15,
  },
  list: {
    maxHeight: '80%',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.black_38,
  }
});
