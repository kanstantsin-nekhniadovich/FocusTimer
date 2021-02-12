import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors, Typography } from '@styles';

const height = Dimensions.get('screen').height;
const isIOS = Platform.OS === 'ios';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: Dimensions.get('screen').height,
    alignItems: 'center',
  },
  addProject: {
    top: 73,
    flexDirection: 'row',
    width: 125,
  },
  addProjectLabel: {
    ...Typography.secondary,
    color: Colors.prussianBlue,
    marginLeft: 6,
    lineHeight: 20,
  },
  timerStartButton: {
    position: 'absolute',
    bottom: (isIOS ? 0.3 : 0.21) * height,
  },
});
