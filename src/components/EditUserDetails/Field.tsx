import React from 'react';
import { TextInput, View, Animated, Text, StyleProp, ViewStyle } from 'react-native';
import { useField } from 'formik';
import { Colors, Common } from '@styles';

import { fieldStyles as styles } from './styles';
import { isDefined } from '../../utils/isDefined';

interface Props {
  name: string;
  icon: React.ReactNode;
  isEditable?: boolean;
  type?: string;
  secureTextEntry?: boolean;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

export const Field: React.FC<Props> = ({
  name,
  icon,
  isEditable = true,
  placeholder,
  secureTextEntry = false,
  type = 'text',
  style,
}) => {
  const [{ onChange, value }, { error, touched }] = useField({ name, type });
  const borderColorAnimate = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(borderColorAnimate, {
      toValue: isEditable ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isEditable, borderColorAnimate]);

  const borderColor = borderColorAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', Colors.black_38 as string],
  });

  const animatedAreaStyles = React.useMemo(() => ({
    ...styles.animatedArea,
    borderColor
  }), [borderColor]);

  return (
    <View style={style}>
      <View style={styles.inputWrapper}>
        <View style={styles.icon}>{icon}</View>
        <Animated.View style={animatedAreaStyles}>
          <TextInput
            autoCompleteType="off"
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChange(name)}
            style={styles.input}
            placeholder={placeholder}
            editable={isEditable}
          />
        </Animated.View>
      </View>
      {isDefined(error) && touched && <Text style={Common.error}>{error}</Text>}
    </View>
  );
};
