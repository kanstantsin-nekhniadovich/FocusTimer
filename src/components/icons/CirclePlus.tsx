/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ColorValue } from 'react-native';

import { Colors } from '@styles';

interface Props {
  width?: number;
  color?: ColorValue | string;
}

export const CircePlus: React.FC<Props> = ({ width = 20, color = Colors.prussianBlue }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 20 20" fill="none">
      <Path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z" fill={color as string} />
    </Svg>
  );
};
