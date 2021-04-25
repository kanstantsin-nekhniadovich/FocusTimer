import React from 'react';
import { Route } from '@react-navigation/native';

import { HeaderTitle } from '../common';
import { Routes } from '../../routes';

interface Props {
  route: Route<Routes.Task, Screens['Task']>;
}

export const TaskHeader: React.FC<Props> = ({ route }) => {
  const { title } = route.params;

  return <HeaderTitle title={title} />;
};
