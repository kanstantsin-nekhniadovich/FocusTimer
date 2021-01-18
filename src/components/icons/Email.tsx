import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@styles';

const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = 16;
const PROPORTAION = DEFAULT_HEIGHT / DEFAULT_WIDTH; 

interface Props {
  width?: number;
}

export const Email: React.FC<Props> = ({ width = DEFAULT_WIDTH }) => {
  return (
    <Svg width={width} height={PROPORTAION * width} viewBox="0 0 20 16" fill="none">
      <Path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill={Colors.prussianBlue as string} />
    </Svg>
  );
};