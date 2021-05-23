import React from 'react';
/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';
import { ColorValue } from 'react-native';
import { Colors } from '@styles';

const DEFAULT_WIDTH = 16;

interface Props {
  width?: number;
  color?: ColorValue | string;
}

export const Time: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = Colors.silverChaliceLight }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 16 16" fill="none">
      <Path d="M7.9935 1.33325C4.3135 1.33325 1.3335 4.31992 1.3335 7.99992C1.3335 11.6799 4.3135 14.6666 7.9935 14.6666C11.6802 14.6666 14.6668 11.6799 14.6668 7.99992C14.6668 4.31992 11.6802 1.33325 7.9935 1.33325ZM8.00016 13.3333C5.0535 13.3333 2.66683 10.9466 2.66683 7.99992C2.66683 5.05325 5.0535 2.66659 8.00016 2.66659C10.9468 2.66659 13.3335 5.05325 13.3335 7.99992C13.3335 10.9466 10.9468 13.3333 8.00016 13.3333Z" fill={color as string} />
      <Path d="M8.3335 4.66675H7.3335V8.66675L10.8335 10.7667L11.3335 9.94675L8.3335 8.16675V4.66675Z" fill={color as string}/>
    </Svg>
  );
};
