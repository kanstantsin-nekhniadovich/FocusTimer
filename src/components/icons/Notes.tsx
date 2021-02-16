/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@styles';

interface Props {
  width?: number;
  color?: string | ColorValue;
}

export const Notes: React.FC<Props> = ({ width = 20, color = Colors.prussianBlue }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 20 20" fill="none">
      <Path d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17 9H7V7H17V9ZM13 13H7V11H13V13ZM17 5H7V3H17V5Z" fill={color as string} />
    </Svg>
  );
};
