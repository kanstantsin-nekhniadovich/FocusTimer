import React from 'react';
import { TextInput, TextInputProps, View, Animated, Easing, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import { Error } from '../../icons';
import { styles } from './styles';
import { isDefined } from '../../../utils/isDefined';

interface Props extends TextInputProps {
  isValid?: boolean;
}

export const Input: React.FC<Props> = ({
  placeholder,
  isValid = true,
  value,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const inputIsActive = isFocused || !!value;
  const [inputPlaceholder, setInputPlaceholder] = React.useState(placeholder);
  const [zIndex, setZIndex] = React.useState(inputIsActive ? 0 : -1);
  const animation = React.useRef(new Animated.Value(inputIsActive ? 1 : 0)).current;

  const labelStyles = React.useMemo(() => {
    return {
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
  }, [animation]);

  const inputStyles = React.useMemo(() => ({ ...styles.input, ...(!isValid ? styles.invalid : {})}), [isValid]);

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

  const onFocus = React.useCallback(() => {
    setIsFocused(true);
    setInputPlaceholder('');
    setZIndex(0);
  }, []);

  const handleBlur = React.useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    if (isDefined(onBlur)) {
      onBlur(event);
    }
  }, [onBlur]);

  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        autoCapitalize="none"
        autoCompleteType='off'
        onFocus={onFocus}
        onBlur={handleBlur}
        placeholder={inputPlaceholder}
        placeholderTextColor='rgba(0, 0, 0, 0.6)'
        value={value}
        style={inputStyles}
      />
      {!isValid &&
        <View style={styles.errorIcon}><Error /></View>}
      <Animated.Text style={{ ...labelStyles, zIndex }}>{placeholder}</Animated.Text>
    </View>
  );
};
