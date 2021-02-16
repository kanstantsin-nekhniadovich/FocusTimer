import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ColorValue } from 'react-native';
import { Colors } from '@styles';

interface Props {
  color?: string | ColorValue;
  width?: number;
}

const DEFAULT_WIDTH = 12;
const DEFAULT_HEIGHT = 8;
const PROPORTION = DEFAULT_HEIGHT / DEFAULT_WIDTH;

export const Arrow: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = Colors.prussianBlue }) => {
  return (
    <Svg width={width} height={width * PROPORTION} viewBox="0 0 12 8" fill="none">
      <Path d="M12 1.70504L10.59 0.295044L6 4.87504L1.41 0.295044L0 1.70504L6 7.70504L12 1.70504Z" fill={color as string}/>
    </Svg>
  );
};
