/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export interface Props {
  width?: number;
  color?: string;
}

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const PROPORTAION = DEFAULT_HEIGHT / DEFAULT_WIDTH;

export const Error: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = '#da1212' }) => {
  return (
    <Svg fill="none" viewBox="0 0 24 24" width={width} height={PROPORTAION * DEFAULT_WIDTH}>
      <Path d="m12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2v-6h2v6z" fill={color} fillOpacity=".89" />
    </Svg>
  );
};
