import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, fonts } from '@styles';
import { useDispatch } from 'react-redux';

import { initApplication } from '../ducks';

export const AppReady: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const [areFontsLoaded] = useFonts(fonts);

  React.useEffect(() => {
    dispatch(initApplication());
  }, []);

  return (
    <>
      {areFontsLoaded
        ? children
        : <AppLoading />
      }
    </>
  );
};
