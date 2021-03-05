import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

import { isDefined } from '../utils/isDefined';
import { Routes } from '../routes';

export const isReadyRef = React.createRef<boolean>();
export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: Routes, params?: Screens) => {
  if (!isReadyRef.current || !isDefined(navigationRef.current)) {
    return;
  }

  navigationRef.current.navigate(name, params);
};
