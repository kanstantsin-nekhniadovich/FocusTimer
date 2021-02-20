/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';

interface Props {
  width?: number;
  color?: ColorValue | string;
}

const DEFAULT_WIDTH = 36;
const DEFAULT_COLOR = 'url(#paint0_linear)';

export const Tick: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = DEFAULT_COLOR }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 36 36" fill="none">
      <Path d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM14.4 27L5.4 18L7.938 15.462L14.4 21.906L28.062 8.244L30.6 10.8L14.4 27Z" fill={color as string} />
      <Defs>
        <LinearGradient id="paint0_linear" x1="36" y1="18" x2="0" y2="18" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#07AB98" />
          <Stop offset="1" stopColor="#1DD98D" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
