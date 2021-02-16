import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { Routes } from '../../routes';
import { CreateNewProjectHeader, CircePlus } from '../../components/icons';
import { IconButton, ProjectsBackground, DividerBlock, OverlayLoader, LinesBackground } from '../../components/common';
import { TimerStartButton } from '../../components/TimerStartButton';
import { ProjectsList } from '../../components/ProjectsList';
import { fetchProjectsRequest, getProjects, getIsProjectsLoading } from '../../ducks';
import { isEmpty } from '../../utils/isEmpty';

import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Projects>;
}

export const Projects: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjects);
  const isProjectLoading = useSelector(getIsProjectsLoading);
  const addProject = React.useCallback(() => {
    navigation.navigate(Routes.NewProject);
  }, [navigation]);

  React.useEffect(() => {
    dispatch(fetchProjectsRequest());
  }, []);

  const thereAreNoProjects = isEmpty(projects);

  const addProjectsButtonStyles = React.useMemo(() =>
    thereAreNoProjects ? styles.addProject : { ...styles.addProject, ...styles.leftAligned }, [thereAreNoProjects]);

  if (thereAreNoProjects && isProjectLoading) {
    return <OverlayLoader />;
  }

  return (
    <View style={styles.container}>
      <IconButton
        style={addProjectsButtonStyles}
        accessibilityLabel="add project"
        onPress={addProject}
        colorOnPress="rgba(110, 120, 198, 0.15)"
      >
        <CircePlus />
        <Text style={styles.addProjectLabel}>Add project</Text>
      </IconButton>
      {thereAreNoProjects
        ? (<>
          <DividerBlock height={180} />
          <CreateNewProjectHeader />
          <LinesBackground />
        </>)
        : <ProjectsList />
      }
      <View style={styles.timerStartButton}><TimerStartButton /></View>
      <ProjectsBackground />
    </View>
  );
};
