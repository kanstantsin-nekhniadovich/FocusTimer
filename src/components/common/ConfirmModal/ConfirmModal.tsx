import React from 'react';
import { TouchableOpacity, Modal, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { isDefined } from '../../../utils/isDefined';
import { Logo } from '../../icons';

import { styles } from './styles';

interface Props {
  visible: boolean;
  title: string;
  onOk: () => void;
  onCancel: () => void;
  okText: string;
  cancelText: string;
  message?: string;
  messageContent?: React.ReactNode;
}

export const ConfirmModal: React.FC<Props> = ({ visible, title, message, messageContent, onOk, onCancel, okText, cancelText }) => {
  const closeModal = React.useCallback(() => isDefined(onCancel) && onCancel(), [onCancel]);

  const submitModal = React.useCallback(() => {
    onOk();
    closeModal();
  }, [onOk, closeModal]);

  return (
    <Modal
      transparent
      animationType='fade'
      visible={visible}
      onDismiss={onCancel}
    >
      <View style={styles.modal}>
        <View style={styles.overlay}></View>
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
