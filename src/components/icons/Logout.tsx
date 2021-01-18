import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@styles';

const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = 18;
const PROPORTAION = DEFAULT_HEIGHT / DEFAULT_WIDTH; 

interface Props {
  width?: number;
}

export const Logout: React.FC<Props> = ({ width = DEFAULT_WIDTH }) => {
  return (
    <Svg width={width} height={PROPORTAION * width} viewBox="0 0 20 18" fill="none">
      <Path d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z" fill={Colors.prussianBlue as string} />
    </Svg>
  );
};
