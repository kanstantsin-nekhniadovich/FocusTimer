import React from 'react';
import { Route } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getProjectById } from '../../ducks';
import { HeaderTitle } from '../common';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';

interface Props {
  route: Route<Routes.Project, Screens['Project']>;
}

export const ProjectHeader: React.FC<Props> = ({ route }) => {
  const project = useSelector(getProjectById(route.params.id));

  if (!isDefined(project)) {
    return null;
  }

  return <HeaderTitle title={project.title} />;
};
