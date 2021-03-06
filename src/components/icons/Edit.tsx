/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '@styles';

interface Props {
  width?: number;
  color?: ColorValue | string;
}

const DEFAULT_WIDTH = 19;

export const Edit: React.FC<Props> = ({ width = DEFAULT_WIDTH, color = Colors.prussianBlue }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 19 19" fill="none">
      <Path d="M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z" fill={color as string} />
    </Svg>
  );
};
