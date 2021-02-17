import { StyleSheet } from 'react-native';
import { Colors, zIndexes, Typography } from '@styles';

export const styles = StyleSheet.create({
  modal: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: zIndexes.modalZIndex,
    paddingHorizontal: 8,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    opacity: 0.6,
    zIndex: -1,
  },
  body: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 16,
  },
  title: {
    ...Typography.h3,
    color: Colors.white,
    marginBottom: 5,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '80%',
  },
  message: {
    ...Typography.message,
    lineHeight: 20,
    color: Colors.white,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonTitle: {
    ...Typography.secondary,
    color: Colors.white,
    textTransform: 'uppercase',
    lineHeight: 20,
    marginRight: 15,
  },
});
