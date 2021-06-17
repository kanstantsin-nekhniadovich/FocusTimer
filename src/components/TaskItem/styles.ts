import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 6,
    alignItems: 'center',
    height: 65,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.darkBlue,
    backgroundColor: Colors.alabaster,
  },
  titleHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...Typography.subtitle,
    fontSize: 16,
    color: Colors.prussianBlue,
    textTransform: 'capitalize',
    marginLeft: 15,
    maxWidth: 180,
  },
  firstItem: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.darkBlue,
  },
  newTaskLabel: {
    ...Typography.text,
    color: Colors.prussianBlue,
  },
  timeHolder: {
    width: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  remainingTime: {
    ...Typography.primary,
    color: Colors.silverChaliceLight,
    textTransform: 'lowercase',
  },
  confirmMessage: {
    ...Typography.message,
    lineHeight: 20,
    color: Colors.white,
  },
  swipeAction: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: Colors.darkBlue,
  },
  swipeRightAction: {
    justifyContent: 'flex-end',
  },
});
