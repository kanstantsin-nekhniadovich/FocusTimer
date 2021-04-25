import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

import { isDefined } from '../utils/isDefined';
import { Routes } from '../routes';

export const isReadyRef = React.createRef<boolean>();
export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = <T extends Routes>(name: T, params?: PropType<ScreensMap, T>) => {
  if (!isReadyRef.current || !isDefined(navigationRef.current)) {
    return;
  }

  navigationRef.current.navigate(name, params);
};
