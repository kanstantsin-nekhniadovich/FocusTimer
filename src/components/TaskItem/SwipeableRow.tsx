import React from 'react';
import { Animated, View, Dimensions } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Colors } from '@styles';

import { isDefined } from '../../utils/isDefined';
import { Delete } from '../icons';

import { styles } from './styles';

const width = Dimensions.get('screen').width;

interface Props {
  onSwipeableOpenAction: () => void;
  children: ({ close }: { close: () => void }) => JSX.Element;
}

const renderRightActions = (_progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0.9],
  });

  return (
    <View style={[styles.swipeAction, styles.swipeRightAction]}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Delete color={Colors.white} width={24} />
      </Animated.View>
    </View>
  );
};

const renderLeftActions = (_progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0.9, 1],
  });

  return (
    <View style={styles.swipeAction}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Delete color={Colors.white} width={24} />
      </Animated.View>
    </View>
  );
};

export const SwipeableRow: React.FC<Props> = ({ onSwipeableOpenAction, children }) => {
  const ref = React.useRef<Nullable<Swipeable>>(null);

  const close = () => {
    if (!isDefined(ref.current)) {
      return;
    }

    ref.current.close();
  };

  const onSwipeableOpen = () => {
    onSwipeableOpenAction();
  };

  return (
    <Swipeable
      ref={ref}
      friction={2}
      leftThreshold={width / 4}
      rightThreshold={width / 4}
      overshootFriction={8}
      onSwipeableOpen={onSwipeableOpen}
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      {children({ close })}
    </Swipeable>
  );
};
