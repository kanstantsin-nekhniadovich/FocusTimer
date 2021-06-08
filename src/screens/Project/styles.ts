import { StyleSheet, Dimensions } from 'react-native';

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
});
