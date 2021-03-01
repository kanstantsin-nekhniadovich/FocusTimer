import { StyleSheet, Dimensions } from 'react-native';
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
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    backgroundColor: Colors.black_38,
    zIndex: 0,
  },
  body: {
    position: 'relative',
    width: '100%',
    borderRadius: 4,
    padding: 16,
  },
  title: {
    ...Typography.h3,
    color: Colors.white,
    marginBottom: 5,
  },
  content: {
    marginBottom: 10,
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
    justifyContent: 'flex-end',
  },
  buttonTitle: {
    ...Typography.secondary,
    color: Colors.white,
    textTransform: 'uppercase',
    lineHeight: 20,
    marginLeft: 15,
  },
  logo: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -25 }],
    right: 16,
  },
});
