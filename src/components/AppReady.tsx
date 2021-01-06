import React from 'react';
import AppLoading from 'expo-app-loading';

import { useFonts, fonts } from '@styles';

export const AppReady: React.FC = ({ children }) => {
  const [areFontsLoaded] = useFonts(fonts);

  return (
    <>
      {areFontsLoaded
        ? children
        : <AppLoading />
      }
    </>
  );
};
