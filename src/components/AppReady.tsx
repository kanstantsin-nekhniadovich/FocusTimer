import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, fonts } from '@styles';
import { useDispatch, useSelector } from 'react-redux';

import { initApplicationRequest, getIsApplicationInited } from '../ducks';

export const AppReady: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const isApplicationInited = useSelector(getIsApplicationInited);
  const [areFontsLoaded] = useFonts(fonts);

  React.useEffect(() => {
    dispatch(initApplicationRequest());
  }, []);

  return (
    <>
      {areFontsLoaded && isApplicationInited
        ? children
        : <AppLoading />
      }
    </>
  );
};
