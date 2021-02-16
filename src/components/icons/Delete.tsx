import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ColorValue } from 'react-native';
import { Colors } from '@styles';

interface Props {
  width?: number;
  color?: ColorValue | string;
}

const DEFAULT_WIDTH = 18;
const DEFAULT_HEIGHT = 14;
const PROPORTION = DEFAULT_HEIGHT / DEFAULT_WIDTH;

export const Delete: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = Colors.prussianBlue }) => {
  return (
    <Svg width={width} height={width * PROPORTION} viewBox="0 0 14 18" fill="none">
      <Path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill={color as string}/>
    </Svg>
  );
};
