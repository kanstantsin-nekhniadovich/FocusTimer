import { StyleSheet } from 'react-native';
import { Colors, zIndexes } from '@styles';

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.white,
    opacity: 0.6,
    zIndex: zIndexes.overlayZIndex,
  },
});
