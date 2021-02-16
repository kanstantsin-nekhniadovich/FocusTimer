/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ColorValue } from 'react-native';

interface Props {
  width?: number;
  color?: ColorValue | string;
}

const DEFAULT_WIDTH = 28;
const DEFAULT_HEIGHT = 24;
const DEFAULT_COLOR = '#7E8084';
const PROPORTION = DEFAULT_HEIGHT / DEFAULT_WIDTH;

export const Restore: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = DEFAULT_COLOR }) => {
  return (
    <Svg width={width} height={width * PROPORTION} viewBox="0 0 28 24" fill="none">
      <Path d="M18.6667 12C18.6667 10.5333 17.4667 9.33333 16 9.33333C14.5333 9.33333 13.3333 10.5333 13.3333 12C13.3333 13.4667 14.5333 14.6667 16 14.6667C17.4667 14.6667 18.6667 13.4667 18.6667 12ZM16 0C9.37333 0 4 5.37333 4 12H0L5.33333 17.3333L10.6667 12H6.66667C6.66667 6.84 10.84 2.66667 16 2.66667C21.16 2.66667 25.3333 6.84 25.3333 12C25.3333 17.16 21.16 21.3333 16 21.3333C13.9867 21.3333 12.12 20.68 10.5867 19.6L8.69333 21.52C10.72 23.0667 13.2533 24 16 24C22.6267 24 28 18.6267 28 12C28 5.37333 22.6267 0 16 0Z" fill={color as string} />
    </Svg>
  );
};
