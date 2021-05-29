import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@styles';
import { useDispatch } from 'react-redux';

import { initApplicationRequest } from '../ducks';

export const AppReady: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const [areFontsLoaded] = useFonts();

  React.useEffect(() => {
    dispatch(initApplicationRequest());
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
