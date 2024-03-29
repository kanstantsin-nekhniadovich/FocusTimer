import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Typography } from '@styles';

const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 18,
    paddingHorizontal: 2,
  },
  addProject: {
    position: 'absolute',
    top: 73,
    flexDirection: 'row',
    width: 125,
  },
  leftAligned: {
    top: undefined,
    bottom: 150,
    left: 15,
  },
  addProjectLabel: {
    ...Typography.secondary,
    color: Colors.prussianBlue,
    marginLeft: 6,
    lineHeight: 20,
  },
  timerStartButton: {
    position: 'absolute',
    bottom: 75,
  },
  list: {
    width: '100%',
    height: 0.59 * height,
  },
});
