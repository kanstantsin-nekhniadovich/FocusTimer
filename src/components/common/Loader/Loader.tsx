import React from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { DividerBlock } from '../DividerBlock';

import { styles } from './styles';

interface Props {
  title?: string;
}

const WIDTH = 35;
const STROKE_WIDTH = 3;
const RADIUS = WIDTH - STROKE_WIDTH;

export const Loader: React.FC<Props> = ({ title = 'Loading...' }) => {
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  const spinAnimation = new Animated.Value(0);
  const trackLength = RADIUS * 2 * Math.PI;

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

  return (
    <View style={styles.container}>
      <DividerBlock height={102} />
      <Text style={styles.title}>{title}</Text>
      <DividerBlock height={194} />
      <AnimatedSvg width={2 * WIDTH} height={2 * WIDTH} style={{ transform: [{ rotate: spin }] }}>
        <Circle cx={WIDTH} cy={WIDTH} r={RADIUS} stroke="#666666" strokeWidth={STROKE_WIDTH} strokeOpacity="0.2" />
        <Circle
          cx={WIDTH}
          cy={WIDTH}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          stroke="#232CC6"
          strokeDasharray={trackLength}
          strokeLinecap="round"
          strokeDashoffset={0.3 * trackLength}
        />
      </AnimatedSvg>
      <DividerBlock height={57} />
      <Text style={styles.message}>Please wate, the information is processing.</Text>
    </View>
  );
};
