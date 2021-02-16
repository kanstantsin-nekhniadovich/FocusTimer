import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.alabaster,
    paddingTop: 18,
    paddingHorizontal: 16,
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
});
