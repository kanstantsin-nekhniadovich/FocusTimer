/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ColorValue } from 'react-native';

const DEFAULT_WIDTH = 20;
const DEFAULT_COLOR = '#000000';

interface Props {
  width?: number;
  color?: ColorValue | string;
}

export const RepeatArrow: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = DEFAULT_COLOR }) => {
  return (
    <Svg width={width} height={width} fill={color as string} viewBox="0 0 16 16">
      <Path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
      <Path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
    </Svg>
  );
};
