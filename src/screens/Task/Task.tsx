import React from 'react';
import { Text } from 'react-native';
import { Route } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getTaskById } from '../../ducks';
import { Wrapper } from '../../components/common';
import { Routes } from '../../routes';
import { isDefined } from 'src/utils/isDefined';

interface Props {
  route: Route<Routes.Task, Screens['Task']>;
}

export const Task: React.FC<Props> = ({ route }) => {
  const { id, projectId } = route.params;
  const task = useSelector(getTaskById(projectId, id));

  if (!isDefined(task)) {
    // here should be redirected to 404 screen
    return null;
  }

  return (
    <Wrapper>
      <Text>{task.title}</Text>
    </Wrapper>
  );
};
