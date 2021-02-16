import React from 'react';
import { Route } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getProjectById } from '../../ducks';
import { HeaderTitle } from '../common';
import { Routes } from '../../routes';

interface Props {
  route: Route<Routes.Project, Screens['Project']>;
}

export const ProjectHeader: React.FC<Props> = ({ route }) => {
  const project = useSelector(getProjectById(route.params.id));

  return <HeaderTitle title={project.title} />;
};
