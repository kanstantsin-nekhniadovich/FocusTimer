import { StyleSheet, Dimensions } from 'react-native';
import { Typography, Colors, zIndexes } from '../../../styles';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  alert: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    right: -600,
    borderRadius: 6,
    minHeight: 40,
    width: width - 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: Colors.concrete,
    zIndex: zIndexes.modalZIndex,
  },
  text: {
    ...Typography.primary,
    color: Colors.black,
    marginRight: 20,
    textTransform: 'none',
    lineHeight: 20,
  },
  crossButton: {
    position: 'absolute',
    top: -12,
    right: -12,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cross: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 16,
    width: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.concrete,
  },
});
