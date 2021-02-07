import React from 'react';
import { Animated } from 'react-native';

export const useOpacityAnimation = (initial: number, duration: number, enabled: boolean) => {
  const animatedOpacity = React.useRef(new Animated.Value(initial)).current;

  React.useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: enabled ? 1 : 0.4,
      duration,
      useNativeDriver: false,
    }).start();
  }, [enabled, animatedOpacity, duration]);

  return [animatedOpacity];
};
