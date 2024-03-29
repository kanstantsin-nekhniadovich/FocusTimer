import React from 'react';
import { TextInput, TextInputProps, View, Animated, Easing, NativeSyntheticEvent, TextInputFocusEventData, ViewStyle } from 'react-native';
import { Colors } from '@styles';

import { Error } from '../../icons';
import { styles } from './styles';
import { isDefined } from '../../../utils/isDefined';
import { isEmpty } from '../../../utils/isEmpty';

interface Props extends TextInputProps {
  isValid?: boolean;
  style?: ViewStyle;
}

export const Input: React.FC<Props> = ({
  placeholder,
  isValid = true,
  value,
  onBlur,
  style,
  ...rest
}) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const inputIsActive = isFocused || (isDefined(value) && !isEmpty(value));
  const [inputPlaceholder, setInputPlaceholder] = React.useState(placeholder);
  const [zIndex, setZIndex] = React.useState(inputIsActive ? 0 : -1);
  const animation = React.useRef(new Animated.Value(inputIsActive ? 1 : 0)).current;

  const labelStyles = {
    ...styles.label,
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 13],
    }),
    left: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 6],
    }),
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10],
    }),
    paddingHorizontal: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 9],
    }),
  };

  const inputStyles = {
    ...styles.input,
    ...(!isValid ? styles.invalid : {}),
    ...(isDefined(style) ? style : {}),
  };

  React.useEffect(() => {
    Animated.timing(animation, {
      duration: 150,
      easing: Easing.ease,
      toValue: inputIsActive ? 1 : 0,
      useNativeDriver: false,
    }).start(() => {
      setInputPlaceholder(inputIsActive ? '' : placeholder);
      setZIndex(inputIsActive ? 0 : -1);
    });
  }, [inputIsActive, placeholder]);

  const onFocus = () => {
    setIsFocused(true);
    setInputPlaceholder('');
    setZIndex(0);
  };

  const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    if (isDefined(onBlur)) {
      onBlur(event);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        autoCapitalize="none"
        autoCompleteType='off'
        onFocus={onFocus}
        onBlur={handleBlur}
        placeholder={inputPlaceholder}
        placeholderTextColor={Colors.black_60}
        value={value}
        style={inputStyles}
      />
      {!isValid &&
        <View style={styles.errorIcon}><Error /></View>}
      <Animated.Text style={{ ...labelStyles, zIndex }}>{placeholder}</Animated.Text>
    </View>
  );
};
