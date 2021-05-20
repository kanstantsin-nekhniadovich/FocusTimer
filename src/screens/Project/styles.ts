import { StyleSheet, Dimensions } from 'react-native';
import { Typography } from '@styles';

const height = Dimensions.get('screen').height / 2;

export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 16,
  },
  addTasksHeader: {
    height,
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    ...Typography.subtitleLarge,
  }
});
