import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  list: {
    width: '100%',
  }
});

export const itemStyles = StyleSheet.create({
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    alignItems: 'center',
    height: 36,
    marginBottom: 20,
  },
  title: {
    ...Typography.subtitle,
    fontSize: 16,
    color: Colors.prussianBlue,
  },
  newTaskLabel: {
    ...Typography.text,
    color: Colors.prussianBlue,
  },
  remainingTime: {
    ...Typography.primary,
    color: Colors.silverChaliceLight,
    textTransform: 'lowercase',
  }
});
