import React from 'react';
import { TextInput, View, Animated, Text, StyleProp, ViewStyle } from 'react-native';
import { useField } from 'formik';
import { Colors, Common } from '@styles';

import { fieldStyles as styles } from './styles';
import { isDefined } from 'src/utils/isDefined';

interface Props {
  name: string;
  icon: React.ReactNode;
  type?: string;
  secureTextEntry?: boolean;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

export const Field: React.FC<Props> = ({
  name,
  icon,
  placeholder,
  secureTextEntry = false,
  type = 'text',
  style,
}) => {
  const [{ onChange, value }, { error, touched }] = useField({ name, type });
  const borderColorAnimate = React.useRef(new Animated.Value(0)).current;

  const animate = React.useCallback((enable = true) => {
    Animated.timing(borderColorAnimate, {
      toValue: enable ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [borderColorAnimate]);

  const onBlur = React.useCallback(() => {
    animate(false);
  }, []);

  const onFocus = React.useCallback(() => {
    animate();
  }, []);

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
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </Animated.View>
      </View>
      {isDefined(error) && touched && <Text style={Common.error}>{error}</Text>}
    </View>
  );
};
