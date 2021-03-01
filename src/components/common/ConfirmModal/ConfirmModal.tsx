import React from 'react';
import { TouchableOpacity, Modal, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { isDefined } from '../../../utils/isDefined';
import { Logo } from '../../icons';

import { styles } from './styles';

interface Props {
  isVisible: boolean;
  title: string;
  onOk: () => void;
  onCancel: () => void;
  okText: string;
  cancelText: string;
  message?: string;
  messageContent?: React.ReactNode;
  closeOnClickOutside?: boolean;
}

export const ConfirmModal: React.FC<Props> = ({
  isVisible,
  title,
  message,
  messageContent,
  onOk,
  onCancel,
  okText,
  cancelText,
  closeOnClickOutside = true,
}) => {
  const closeModal = React.useCallback(() => {
    if (!isDefined(onCancel)) {
      return;
    }

    onCancel();
  }, [onCancel]);

  const submitModal = React.useCallback(() => {
    onOk();
    closeModal();
  }, [onOk, closeModal]);

  const onStartShouldSetResponder = React.useCallback(() => {
    if (!closeOnClickOutside) {
      return false;
    }

    closeModal();
    return true;
  }, [closeModal, closeOnClickOutside]);

  return (
    <Modal
      transparent
      animationType='fade'
      visible={isVisible}
      onDismiss={onCancel}
    >
      <View style={styles.modal} >
        <View style={styles.overlay} onStartShouldSetResponder={onStartShouldSetResponder} />
        <LinearGradient
          colors={['#232CC6', '#0015B5', '#343882']}
          start={[0, 0]}
          end={[0, 1]}
          locations={[0, 0.45, 1]}
          style={styles.body}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            {isDefined(message)
              ? <Text style={styles.message}>{message}</Text>
              : isDefined(messageContent) && <View>{messageContent}</View>
            }
          </View>
          <View style={styles.logo}><Logo /></View>
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.buttonTitle}>{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={submitModal}>
              <Text style={styles.buttonTitle}>{okText}</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
