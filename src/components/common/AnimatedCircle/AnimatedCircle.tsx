import React from 'react';
import { Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { styles } from './styles';

interface Props {
  width?: number;
  strokeWidth?: number;
}

const WIDTH = 35;
const STROKE_WIDTH = 3;

export const AnimatedCircle: React.FC<Props> = ({ width = WIDTH, strokeWidth = STROKE_WIDTH }) => {
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  const radius = width - strokeWidth;
  const spinAnimation = new Animated.Value(0);
  const trackLength = radius * 2 * Math.PI;

  const animate = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(
          spinAnimation, {
            toValue: 1,
            duration: 1200,
            easing: Easing.linear,
            useNativeDriver: false,
          },
        ),
      ]),
    ).start();
  };

  React.useEffect(() => {
    animate();
  });

  const spin = spinAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const style = {
    ...styles.circle,
    transform: [{ translateY: -width }, { translateX: -width }, { rotateZ: spin }],
  };

  return (
    <AnimatedSvg width={2 * width} height={2 * width} style={style}>
      <Circle cx={width} cy={width} r={radius} stroke="#666666" strokeWidth={strokeWidth} strokeOpacity="0.2" />
      <Circle
        cx={width}
        cy={width}
        r={radius}
        strokeWidth={strokeWidth}
        stroke="#232CC6"
        strokeDasharray={trackLength}
        strokeLinecap="round"
        strokeDashoffset={0.3 * trackLength}
      />
    </AnimatedSvg>
  );
};
