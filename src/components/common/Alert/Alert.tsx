import { Alert as AlertType } from '@typings';
import React from 'react';
import { View, TouchableOpacity, Text, Animated, PanResponder, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '@styles';

import { getAlertMeta, hideAlert } from '../../../ducks';
import { Cross } from '../../icons';
import { styles } from './styles';
import { isDefined } from '../../../utils/isDefined';

const width = Dimensions.get('screen').width;

const ALERT_TIMEOUT = 7000;
const MIN_POSITION_OFFSET = width / 2;
const HIDDEN_POSITION = 2 * width;
const VISIBLE_POSITION = 10;

const config: Record<AlertType, string> = Object.freeze({
  error: Colors.error as string,
  success: Colors.success as string,
});

export const Alert: React.FC = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout>();
  const alertMeta = useSelector(getAlertMeta);
  const positionX = React.useRef(new Animated.Value(-HIDDEN_POSITION)).current;

  const panResponder = React.useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_event, gestureState) => {
      positionX.setValue(gestureState.dx);
    },
    onPanResponderRelease: (_event, gestureState) => {
      if (gestureState.dx > MIN_POSITION_OFFSET) {
        animateAlert(HIDDEN_POSITION);
      } else if (gestureState.dx < -MIN_POSITION_OFFSET) {
        animateAlert(-HIDDEN_POSITION);
      } else {
        animateAlert(VISIBLE_POSITION);
      }
    },
  })).current;

  React.useEffect(() => {
    setIsVisible(alertMeta.isVisible);
  }, [alertMeta]);

  const closeErrorAlert = () => setIsVisible(false);

  const clearVisibilityTimeout = () => {
    if (isDefined(timeoutId)) {
      clearTimeout(timeoutId);
    }
  };

  const animateAlert = (toValue: number) => {
    Animated.spring(positionX, {
      stiffness: 100,
      damping: 9,
      mass: 1,
      toValue,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (!isVisible && finished) {
        clearVisibilityTimeout();
        dispatch(hideAlert());
      }
    });
  };

  React.useEffect(() => {
    animateAlert(isVisible ? VISIBLE_POSITION : HIDDEN_POSITION);
  }, [isVisible]);

  React.useEffect(() => {
    if (!isVisible) {
      return;
    }

    setTimeoutId(setTimeout(() => {
      closeErrorAlert();
    }, ALERT_TIMEOUT));

    return clearVisibilityTimeout;
  }, [isVisible]);

  const style = {
    ...styles.alert,
    transform: [{ translateX: positionX }],
    borderColor: config[alertMeta.type],
  };

  return (
    <Animated.View style={style} { ...panResponder.panHandlers }>
      <Text testID="alert-message" style={styles.text}>{alertMeta.message}</Text>
      <TouchableOpacity onPress={closeErrorAlert} style={styles.crossButton}>
        <View style={{ ...styles.cross, borderColor: config[alertMeta.type] }} testID="cross-icon">
          <Cross width={10} color={config[alertMeta.type]} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
