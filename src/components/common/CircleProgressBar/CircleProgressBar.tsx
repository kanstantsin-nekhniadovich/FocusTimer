import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { ColorValue } from 'react-native';
import { Colors } from '@styles';

import { styles } from './styles';

const DEFAULT_SIZE = 150;

const DEFAULT_STROKE_WIDTH = 20;

interface Props {
  size?: number;
  strokeWidth?: number;
  progress?: number;
  backStrokeColor?: string;
  progressColor?: ColorValue | string;
}

export const CircleProgressBar: React.FC<Props> =
  ({ size = DEFAULT_SIZE, strokeWidth = DEFAULT_STROKE_WIDTH, progress = 0, backStrokeColor = Colors.mischka, progressColor }) => {
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const offset = (1 - progress / 100) * circumference;

    return (
      <Svg style={{ ...styles.svg, width: size, height: size }}>
        <Circle
          stroke={backStrokeColor as string}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={progressColor as string}
          cx={center}
          cy={center}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  };
