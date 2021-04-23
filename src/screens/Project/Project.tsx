import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { Wrapper, ProjectsBackground } from '../../components/common';
import { AddNewTaskHeader } from '../../components/icons';
import { TasksList } from '../../components/TasksList';
import { AddTaskForm } from '../../components/AddTaskForm';
import { Routes } from '../../routes';
import { getProjectById, getTasksForProject } from '../../ducks';
import { isDefined } from '../../utils/isDefined';

import { styles } from './styles';

type Props = StackScreenProps<Screens, Routes.Project>;

export const Project: React.FC<Props> = ({ route }) => {
  const project = useSelector(getProjectById(route.params.id));
  const tasks = useSelector(getTasksForProject(project));
  const areTasksExist = tasks.length > 0;

  if (!isDefined(project)) {
    return (
      <Wrapper>
        <Text>Project is not found</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper style={styles.wrapper}>
      {areTasksExist
        ? <TasksList tasks={tasks} />
        : <>
          <AddTaskForm />
          <View style={styles.addTasksHeader}><AddNewTaskHeader /></View>
        </>
      }
      <ProjectsBackground />
    </Wrapper>
  );
};
