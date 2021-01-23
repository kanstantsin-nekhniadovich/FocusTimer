/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@styles';

const DEFAULT_WIDTH = 16;

interface Props {
  width?: number;
}

export const ArrowBack: React.FC<Props> = ({ width = DEFAULT_WIDTH }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 16 16" fill="none">
      <Path d="M0 9L12.17 9L6.58 14.59L8 16L16 8L8 0L6.59 1.41L12.17 7L0 7L0 9Z" fill={Colors.prussianBlue as string} />
    </Svg>
  );
};
