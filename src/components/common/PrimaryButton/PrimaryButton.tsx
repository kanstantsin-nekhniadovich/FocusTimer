import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, ViewStyle } from 'react-native';

import { isDefined } from '../../../utils/isDefined';

import { styles, states } from './styles';

type Variant = 'standard' | 'social' | 'outlined';
type Size = 'big' | 'small';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  variant?: Variant;
  size?: Size;
  style?: ViewStyle;
}

export const PrimaryButton: React.FC<Props> = ({ title, variant = 'standard', size = 'big', disabled, style, ...rest }) => {
  const variantStyles = styles[variant];

  const btnStyles = {
    ...variantStyles.btn,
    ...states.btn[size],
    ...(isDefined(disabled) && disabled ? states.btn.disabled : {}),
    ...(isDefined(style) ? style : {}),
  };

  const labelStyles = {
    ...variantStyles.label,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={btnStyles}
      {...rest}
      disabled={disabled}
    >
      <Text style={labelStyles}>{title}</Text>
    </TouchableOpacity>
  );
};
