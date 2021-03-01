import React from 'react';
import { Modal as ReactNativeModal, View, Text } from 'react-native';
import { Colors } from '@styles';

import { IconButton } from '../IconButton';
import { Cross } from '../../icons';
import { styles } from './styles';

interface Props {
  isVisible: boolean;
  title: string;
  onClose: () => void;
  closeOnClickOutside?: boolean;
}

export const Modal: React.FC<Props> = ({ title, isVisible, closeOnClickOutside = true, onClose, children }) => {
  const onStartShouldSetResponder = React.useCallback(() => {
    if (!closeOnClickOutside) {
      return false;
    }

    onClose();
    return true;
  }, [onClose, closeOnClickOutside]);

  return (
    <ReactNativeModal
      transparent
      animationType="fade"
      visible={isVisible}
      onDismiss={onClose}
    >
      <View style={styles.modal}>
        <View style={styles.overlay} onStartShouldSetResponder={onStartShouldSetResponder} />
        <View style={styles.body}>
          <IconButton onPress={onClose} accessibilityLabel="Close modal" style={styles.crossIcon}>
            <Cross color={Colors.black} />
          </IconButton>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
          {children}
        </View>
      </View>
    </ReactNativeModal>
  );
};
