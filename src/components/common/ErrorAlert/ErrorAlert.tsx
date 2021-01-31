import React from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '@styles';

import { getIsErrorAlertShown, getErrorMessage, hideErrorAlert } from '../../../ducks';
import { Cross } from '../../icons';
import { styles } from './styles';
import { isDefined } from '../../../utils/isDefined';

const ALERT_TIMEOUT = 7000;

export const ErrorAlert: React.FC = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = React.useState(false);
  const isErrorAlertShown = useSelector(getIsErrorAlertShown);
  const errorMessage = useSelector(getErrorMessage);
  const rightAnimate = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    setIsVisible(isErrorAlertShown);
  }, [isErrorAlertShown]);

  const closeErrorAlert = React.useCallback(() => setIsVisible(false), []);

  React.useEffect(() => {
    Animated.spring(rightAnimate, {
      stiffness: 100,
      damping: 9,
      mass: 1,
      toValue: isVisible ? 1 : 0,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (!isVisible && finished) {
        dispatch(hideErrorAlert());
      }
    });
  }, [isVisible]);

  React.useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timerId = setTimeout(() => {
      closeErrorAlert();
    }, ALERT_TIMEOUT);

    return () => {
      if (isDefined(timerId)) {
        clearTimeout(timerId);
      }
    };
  }, [isVisible]);

  const right = rightAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [-600, 10],
  });

  return (
    <Animated.View style={{ ...styles.alert, right }}>
      <Text style={styles.text}>{errorMessage}</Text>
      <TouchableOpacity onPress={closeErrorAlert} style={styles.crossButton}>
        <View style={styles.cross}><Cross width={10} color={Colors.error as string} /></View>
      </TouchableOpacity>
    </Animated.View>
  );
};
