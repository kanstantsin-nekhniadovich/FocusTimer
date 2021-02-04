import { Alert as AlertType } from '@typings';
import React from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '@styles';

import { getAlertMeta, hideAlert } from '../../../ducks';
import { Cross } from '../../icons';
import { styles } from './styles';
import { isDefined } from '../../../utils/isDefined';

const ALERT_TIMEOUT = 7000;

const config: Record<AlertType, string> = Object.freeze({
  error: Colors.error as string,
  success: Colors.success as string,
});

export const Alert: React.FC = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = React.useState(false);
  const alertMeta = useSelector(getAlertMeta);
  const rightAnimate = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    setIsVisible(alertMeta.isVisible);
  }, [alertMeta]);

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
        dispatch(hideAlert());
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

  const style = React.useMemo(() => ({
    ...styles.alert,
    right,
    borderColor: config[alertMeta.type],
  }), [styles.alert, right, alertMeta]);

  return (
    <Animated.View style={{ ...style }}>
      <Text style={styles.text}>{alertMeta.message}</Text>
      <TouchableOpacity onPress={closeErrorAlert} style={styles.crossButton}>
        <View style={{ ...styles.cross, borderColor: config[alertMeta.type] }}>
          <Cross width={10} color={config[alertMeta.type]} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
