import { StyleSheet } from 'react-native';
import { zIndexes } from '@styles';

export const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    zIndex: zIndexes.overlayZIndex,
    top: '50%',
    left: '50%',
  },
});
