import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, StyleSheet } from 'react-native';

import { testRequest, getTestValue } from '../ducks';
import { AppReady } from './AppReady';
import { Typography } from '@styles';
import { PrimaryButton } from './common';

const styles = StyleSheet.create({
  h1: Typography.h1
});

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector(getTestValue);

  const handleClick = React.useCallback(() => {
    dispatch(testRequest(Math.floor(10 * Math.random(1))));
  }, []);

  return (
    <AppReady>
      <>
        <Text style={styles.h1}>FOCUS TIMER</Text>
        <Text>Dispatched value: {value}</Text>
        <PrimaryButton onPress={handleClick} title="Click" />
      </>
    </AppReady>
  );
};
