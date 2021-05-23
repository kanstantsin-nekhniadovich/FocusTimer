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
  shell: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: Colors.black_15,
    borderRadius: 4,
    overflow: 'hidden',
  },
  head: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    backgroundColor: Colors.alabaster,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: Colors.black_38,
  },
  body: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.alabaster,
  },
  title: {
    ...Typography.h3,
    height: 30,
    marginBottom: 10,
  },
  crossIcon: {
    width: 28,
    height: 28,
    position: 'absolute',
    top: 2,
    right: 2,
  },
});
