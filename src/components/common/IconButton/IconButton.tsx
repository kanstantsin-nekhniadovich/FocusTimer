import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '@styles';

import { isDefined } from '../../../utils/isDefined';
import { styles } from './styles';

interface Props {
  accessibilityLabel: string;
  handleClick: () => void;
  colorOnPress?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export const IconButton: React.FC<Props> = ({ children, accessibilityLabel, handleClick, style, colorOnPress, disabled = false }) => {
  const pressColor = isDefined(colorOnPress) ? colorOnPress : Colors.pressEffect;

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      onPress={handleClick}
      android_disableSound
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressColor : 'transparent', 
        },
        styles.button,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};
