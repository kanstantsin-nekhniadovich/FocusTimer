import React from 'react';
import { View, ViewStyle } from 'react-native';

import { styles } from './styles';

interface Props {
  adjustStatusBar?: boolean;
  style?: ViewStyle;
}

export const Wrapper: React.FC<Props> = ({ style = {}, adjustStatusBar = false, children }) => {
  const wrapperStyles = {
    ...styles.wrapper,
    ...style,
    ...(adjustStatusBar ? styles.statusBarAdjusting : {}),
  };

  return (
    <View style={wrapperStyles}>{children}</View>
  );
};
