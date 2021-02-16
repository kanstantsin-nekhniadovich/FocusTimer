/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@styles';
import { ColorValue } from 'react-native';

const DEFAULT_WIDTH = 16;
const DEFAULT_HEIGHT = 21;
const PROPORTAION = DEFAULT_HEIGHT / DEFAULT_WIDTH; 

interface Props {
  width?: number;
  color?: ColorValue | string;
}

export const Lock: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = Colors.prussianBlue }) => {
  return (
    <Svg width={width} height={PROPORTAION * width} viewBox="0 0 16 21" fill="none">
      <Path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11.1 7H4.9V5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7Z" fill={color as string} />
    </Svg>
  );
};
