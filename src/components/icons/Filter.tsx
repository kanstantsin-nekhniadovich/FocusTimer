/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ColorValue } from 'react-native';
import { Colors } from '@styles';

const DEFAULT_WIDTH = 24;

interface Props {
  width?: number;
  color?: ColorValue | string;
}

export const Filter: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = Colors.prussianBlue }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 24 24" fill="none">
      <Path d="M4.25006 5.61C6.27006 8.2 10.0001 13 10.0001 13V19C10.0001 19.55 10.4501 20 11.0001 20H13.0001C13.5501 20 14.0001 19.55 14.0001 19V13C14.0001 13 17.7201 8.2 19.7401 5.61C20.2501 4.95 19.7801 4 18.9501 4H5.04006C4.21006 4 3.74006 4.95 4.25006 5.61Z" fill={color as string} />
    </Svg>
  );
};
