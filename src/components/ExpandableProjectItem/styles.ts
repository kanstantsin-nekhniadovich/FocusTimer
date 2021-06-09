import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  item: {
    position: 'relative',
    width: '100%',
    height: 54,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    marginBottom: 14,
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.07)',
    borderWidth: 1,
  },
  indicator: {
    position: 'absolute',
    width: 7,
    top: 0,
    left: 0,
    bottom: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  titleHolder: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
  },
  runProjectButton: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: 3,
  },
  arrowButtonHolder: {
    position: 'absolute',
    height: 54,
    width: 30,
    right: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  arrowButton: {
    width: 30,
    height: '100%',
  },
  pressableTitle: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...Typography.subtitle,
    color: Colors.prussianBlue,
    marginLeft: 50,
    width: '100%',
  },
  tasksIndicator: {
    ...Typography.subtitleSmall,
    color: Colors.prussianBlue,
    position: 'absolute',
    bottom: 3,
    right: 10,
  },
  noteHolder: {
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  note: {
    ...Typography.subtitleSmall,
  },
});

export const toolsMenuStyles = StyleSheet.create({
  toolsMenuHolder: {
    paddingTop: 3,
    paddingRight: 10,
    paddingLeft: 15,
  },
  toolsMenu: {
    height: 46,
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

export const editNoteModalStyles = StyleSheet.create({
  form: {
    width: '100%',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  noteLengthIndicator: {
    ...Typography.subtitleSmall,
    alignSelf: 'flex-end',
    color: Colors.black_60,
    letterSpacing: -0.3,
  },
  textarea: {
    minHeight: 40,
    maxHeight: 150,
  },
});
