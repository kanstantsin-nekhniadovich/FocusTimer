import React from 'react';
import { View, ViewStyle } from 'react-native';

import { styles } from './styles';

interface Props {
  adjustStatusBar?: boolean;
  style?: ViewStyle;
}

export const Wrapper: React.FC<Props> = ({ style = {}, adjustStatusBar = false, children }) => {
  const wrapperStyles = React.useMemo(() => ({
    ...styles.wrapper,
    ...style,
    ...(adjustStatusBar ? styles.statusBarAdjusting : {}),
  }), [style, adjustStatusBar]);

  return (
    <View style={wrapperStyles}>{children}</View>
  );
};
