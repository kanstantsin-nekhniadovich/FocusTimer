import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  item: {
    position: 'relative',
    width: '100%',
    height: 64,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.alabaster,
    marginBottom: 14,
    borderRadius: 8,
    paddingTop: 19,
    paddingHorizontal: 10,
    shadowColor: 'rgba(0, 31, 90, 0.16)',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 2,
  },
  gradient: {
    borderRadius: 8,
  },
  titleHolder: {
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowButtonHolder: {
    position: 'absolute',
    height: 64,
    right: -8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  arrowButton: {
    width: 30,
    height: '100%',
  },
  pressableTitle: {
    width: '75%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...Typography.subtitle,
    color: Colors.prussianBlue,
    marginLeft: 5,
    width: '100%',
  },
  tasksIndicator: {
    ...Typography.subtitleSmall,
    color: Colors.prussianBlue,
    position: 'absolute',
    bottom: 3,
    right: 10,
  },
});

export const toolsMenuStyles = StyleSheet.create({
  toolsMenu: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  separateLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0, 31, 90, 0.2)',
  },
  confirmMessage: {
    ...Typography.message,
    lineHeight: 20,
    color: Colors.white,
  },
});
