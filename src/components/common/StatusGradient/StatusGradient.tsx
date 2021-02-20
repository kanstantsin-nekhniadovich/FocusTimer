import React from 'react';
import { Status } from '@typings';
import { ViewStyle } from 'react-native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

import { styles } from './styles';

interface Props {
  status: Status;
  style?: ViewStyle;
}

const CONFIG: Record<Status, LinearGradientProps> = {
  TODO: {
    colors: ['#707070', '#C9C9C9', '#484848'],
    start: [1, 1],
    end: [0, 0],
    locations: [0, 0.8156, 1],
  },
  INPROGRESS: {
    colors: ['rgba(99, 13, 106, 0.72)', 'rgba(153, 24, 164, 0.27)', 'rgba(153, 24, 164, 0.405405)', '#7B1A83'],
    start: [0, 1],
    end: [1, 0],
    locations: [0.00259, 0.2084, 0.368, 1],
  },
  COMPLETED: {
    colors: ['#07AB98', '#1DD98D'],
    start: [1, 0],
    end: [0, 1],
    locations: [0, 1],
  },
};

export const StatusGradient: React.FC<Props> = ({ status, style }) => {
  const config = CONFIG[status];
  const gradientStyles = React.useMemo(() => ({ ...styles.gradient, ...style }), [style]);

  return (
    <LinearGradient
      {...config}
      style={gradientStyles}
    />
  );
};
