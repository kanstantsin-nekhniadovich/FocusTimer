/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DEFAULT_WIDTH = 20;
const DEFAULT_COLOR = '#000000';

interface Props {
  width?: number;
  color?: ColorValue | string;
}

export const ArrowDownUp: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = DEFAULT_COLOR }) => {
  return (
    <Svg width={width} height={width} fill={color as string} viewBox="0 0 16 16">
      <Path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
    </Svg>
  );
};
