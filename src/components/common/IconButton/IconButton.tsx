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
}

export const IconButton: React.FC<Props> = ({ children, accessibilityLabel, handleClick, style, colorOnPress }) => {
  const pressColor = isDefined(colorOnPress) ? colorOnPress : Colors.pressEffect;

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      onPress={handleClick}
      android_disableSound
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
