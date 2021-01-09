import { AppReady } from './AppReady';
import { PrimaryButton } from './common';
import React from 'react';
import { Typography } from '@styles';
import { StyleSheet, Text } from 'react-native';
import { getTestValue, loginRequest } from '../ducks';
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
  h1: Typography.h1
});

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector(getTestValue);

  const handleClick = React.useCallback(() => {
    dispatch(loginRequest({ email: 'mira@gmail.com', password: 'admin123' }));
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
