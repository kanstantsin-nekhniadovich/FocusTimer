import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles, states } from './styles';

type Variant = 'standard' | 'social' | 'outlined';
type Size = 'big' | 'small';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  variant?: Variant;
  size?: Size; 
}

export const PrimaryButton: React.FC<Props> = ({ title, variant = 'standard', size = 'big', disabled, ...rest }) => {
  const variantStyles = styles[variant];

  const btnStyles = React.useMemo(() => ({
    ...variantStyles.btn,
    ...states.btn[size],
    ...(disabled ? states.btn.disabled : {}),
  }), [variantStyles, size, disabled]);

  const labelStyles = React.useMemo(() => ({
    ...variantStyles.label,
  }), [variantStyles]);

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
