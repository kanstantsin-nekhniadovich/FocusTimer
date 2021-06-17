import React from 'react';
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import { Colors } from '@styles';

import { isDefined } from '../../utils/isDefined';
import { Delete } from '../icons';

import { styles } from './styles';

interface Props {
  // onSwipeableOpen: () => void;
  onActionClick: () => void;
  onSwipeableLeftWillOpen: () => void;
  onSwipeableRightWillOpen: () => void;
  onSwipeableWillClose: () => void;
}

export const SwipeableRow: React.FC<Props> =
  React.memo(({ onActionClick, onSwipeableLeftWillOpen, onSwipeableRightWillOpen, onSwipeableWillClose, children }) => {
    const ref = React.useRef<Nullable<Swipeable>>(null);

    const close = () => {
      if (!isDefined(ref.current)) {
        return;
      }

      ref.current.close();
    };

    const handleActionClick = React.useCallback(() => {
      onActionClick();
      close();
    }, [onActionClick]);

    const handleSwipeableOpen = React.useCallback(() => {
      // onSwipeableOpen();
      onActionClick();
    }, [onActionClick]);

    const renderRightActions = () => {
      return (
        <RectButton style={{ ...styles.swipeAction, ...styles.swipeRightAction }} onPress={handleActionClick}>
          <Delete color={Colors.white} width={24} />
        </RectButton>
      );
    };

    const renderLeftActions = () => {
      return (
        <RectButton style={styles.swipeAction} onPress={handleActionClick}>
          <Delete color={Colors.white} width={24} />
        </RectButton>
      );
    };

    return (
      <Swipeable
        ref={ref}
        friction={2}
        leftThreshold={50}
        rightThreshold={50}
        overshootFriction={8}
        onSwipeableOpen={handleSwipeableOpen}
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
        onSwipeableLeftWillOpen={onSwipeableLeftWillOpen}
        onSwipeableRightWillOpen={onSwipeableRightWillOpen}
        onSwipeableWillClose={onSwipeableWillClose}
        onSwipeableWillOpen={() => { console.log('asdfsdfsdfsd'); }}
      >
        {children}
      </Swipeable>
    );
  });
