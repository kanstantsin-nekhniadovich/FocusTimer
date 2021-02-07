import React from 'react';
import { TextInput, View, Animated, Text, StyleProp, ViewStyle } from 'react-native';
import { FieldMetaProps } from 'formik';
import { Colors, Common } from '@styles';

import { fieldStyles as styles } from './styles';
import { isDefined } from '../../utils/isDefined';

interface Props {
  icon: React.ReactNode;
  onChange: (value: string) => void;
  meta: FieldMetaProps<string>;
  isEditable?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

export const Field: React.FC<Props> = ({ icon, onChange, meta, isEditable = true, placeholder, secureTextEntry = false, style }) => {
  const { error, touched, value } = meta;
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
            onChangeText={onChange}
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
