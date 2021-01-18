import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';

import { ArrowBack } from '../../components/icons';
import { fieldStyles as styles } from './styles';
import { isDefined } from '../../utils/isDefined';

interface Props {
  value: string;
  onEdit?: (value: string) => void;
  accessibilityLabel?: string;
  secureTextEntry?: boolean;
  disableInput?: boolean;
  isEditable?: boolean;
  icon?: React.ReactNode;
  placeholder?: string;
}

export const Field: React.FC<Props> = ({
  value,
  secureTextEntry = false,
  accessibilityLabel = 'edit',
  onEdit,
  disableInput = false,
  isEditable = false,
  icon,
  placeholder,
}) => {
  const [inputValue, setInputValue] = React.useState(value);

  const onChangeText = React.useCallback((value) => {
    setInputValue(value);
  }, []);

  const onPress = React.useCallback(() => {
    if (!isDefined(onEdit)) {
      return;
    }

    onEdit(inputValue);
  }, [onEdit, inputValue]);

  return (
    <View style={styles.fieldContainer}>
      {isDefined(icon) && <View style={styles.icon}>{icon}</View>}
      <TextInput
        secureTextEntry={secureTextEntry}
        value={inputValue}
        editable={!disableInput || isEditable}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
      />
      <TouchableOpacity
        accessibilityLabel={accessibilityLabel}
        activeOpacity={0.7}
        onPress={onPress}
        disabled={isEditable}
      >
      </TouchableOpacity>
      <ArrowBack />
    </View>
  );
};
