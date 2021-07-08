import React from 'react';
import { Route } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getTaskById } from '../../ducks';
import { HeaderTitle } from '../common';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';

interface Props {
  route: Route<Routes.Task, Screens['Task']>;
}

export const TaskHeader: React.FC<Props> = ({ route }) => {
  const { id, projectId } = route.params;
  const task = useSelector(getTaskById(projectId, id));

  return isDefined(task)
    ? <HeaderTitle title={task.title} style={{ maxWidth: 150 }} />
    : null;
};
