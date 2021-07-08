import React from 'react';
import { Route } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getTaskById } from '../../ducks';
import { Wrapper, DividerBlock, ProjectsBackground } from '../../components/common';
import { TaskTitleForm } from '../../components/TaskTitleForm';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';

import { styles } from './styles';

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
    <Wrapper style={styles.wrapper}>
      <DividerBlock height={50} />
      <TaskTitleForm task={task} />
      <ProjectsBackground />
    </Wrapper>
  );
};
