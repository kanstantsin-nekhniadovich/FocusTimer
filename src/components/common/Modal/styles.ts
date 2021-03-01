import { StyleSheet, Dimensions } from 'react-native';
import { zIndexes, Colors, Typography } from '@styles';

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
  },
  body: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.alabaster,
    borderRadius: 2,
  },
  title: {
    ...Typography.h3,
    marginBottom: 20,
  },
  crossIcon: {
    width: 28,
    height: 28,
    position: 'absolute',
    top: 2,
    right: 2,
  },
});
