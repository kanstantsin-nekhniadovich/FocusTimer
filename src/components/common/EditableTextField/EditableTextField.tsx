import React from 'react';
import { TextInput, View, Animated, Text, StyleProp, ViewStyle, TextInputProps } from 'react-native';
import { FieldMetaProps } from 'formik';
import { Colors, Common } from '@styles';

import { styles } from './styles';
import { isDefined } from '../../../utils/isDefined';

interface Props extends TextInputProps {
  icon: React.ReactNode;
  meta: FieldMetaProps<string>;
  isEditable?: boolean;
  style?: StyleProp<ViewStyle>;
  setFocus?: boolean;
}

export const EditableTextField: React.FC<Props> =
  ({ icon, meta, isEditable = true, placeholder, style, setFocus = false, ...rest }) => {
    const ref = React.useRef<Nullable<TextInput>>(null);
    const { error, touched, value } = meta;
    const borderColorAnimate = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
      if (!isEditable || !setFocus || !isDefined(ref.current)) {
        return;
      }

      ref.current.focus();
    }, [isEditable, setFocus]);

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

    const animatedAreaStyles = {
      ...styles.animatedArea,
      borderColor
    };

    const maskStyles = isDefined(value) && value !== '' ? styles.mask : { ...styles.mask, color: Colors.black_60 as string };

    return (
      <View style={style}>
        <View style={styles.inputWrapper}>
          <View style={styles.icon}>{icon}</View>
          <Animated.View style={animatedAreaStyles}>
            {isEditable
              ? <TextInput
                autoCompleteType="off"
                value={value}
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={Colors.black_60}
                editable={isEditable}
                ref={ref}
                {...rest}
              />
              : <Text numberOfLines={1} style={maskStyles}>
                {isDefined(value) && value !== '' ? value : placeholder}
              </Text>}
          </Animated.View>
        </View>
        {isDefined(error) && touched && <Text style={Common.error}>{error}</Text>}
      </View>
    );
  };
