/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@styles';

interface Props {
  width?: number;
  color?: string | ColorValue;
}

export const Play: React.FC<Props> = ({ width = 28, color = Colors.prussianBlue }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 28 28" fill="none">
      <Path d="M14.0001 0.666626C6.64008 0.666626 0.666748 6.63996 0.666748 14C0.666748 21.36 6.64008 27.3333 14.0001 27.3333C21.3601 27.3333 27.3334 21.36 27.3334 14C27.3334 6.63996 21.3601 0.666626 14.0001 0.666626ZM11.3334 20V7.99996L19.3334 14L11.3334 20Z" fill={color as string} />
    </Svg>
  );
};
