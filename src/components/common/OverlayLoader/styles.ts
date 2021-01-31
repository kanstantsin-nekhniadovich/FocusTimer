import { StyleSheet } from 'react-native';
import { Colors, zIndexes } from '@styles';

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    opacity: 0.6,
    zIndex: zIndexes.overlayZIndex,
  },
});
