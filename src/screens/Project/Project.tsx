import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { getProjectById, getTasksForProject, getIsTaskLoading } from '../../ducks';
import { Wrapper, ProjectsBackground, OverlayLoader, DividerBlock } from '../../components/common';
import { AddNewTaskHeader } from '../../components/icons';
import { TasksList } from '../../components/TasksList';
import { AddTaskForm } from '../../components/AddTaskForm';
import { Routes } from '../../routes';

import { isDefined } from '../../utils/isDefined';

import { styles } from './styles';

type Props = StackScreenProps<Screens, Routes.Project>;

export const Project: React.FC<Props> = ({ route }) => {
  const project = useSelector(getProjectById(route.params.id));
  const tasks = useSelector(getTasksForProject(project));
  const isLoading = useSelector(getIsTaskLoading);

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
      {isLoading && <OverlayLoader />}
      <AddTaskForm projectId={project.id} />
      {areTasksExist
        ? <TasksList tasks={tasks} />
        : <View style={styles.addTasksHeader}><AddNewTaskHeader /></View>
      }
      <ProjectsBackground />
    </Wrapper>
  );
};
