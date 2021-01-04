import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Button } from 'react-native';

import { getTestValue, test } from './ducks';

export const Main: React.FC = () => {
  const testValue = useSelector(getTestValue);
  const dispatch = useDispatch();

  const handleClick = React.useCallback(() => {
    dispatch(test(`Dispatched value: ${Math.floor(10 * Math.random(1))}`));
  }, []);

  return (
    <>
      <Text>Main view: {testValue}</Text>
      <Button onPress={handleClick} title="Dispatch"/>
    </>
  );
};
