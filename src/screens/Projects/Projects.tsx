import { Status } from '@typings';
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { Routes } from '../../routes';
import { CreateNewProjectHeader, CircePlus } from '../../components/icons';
import { IconButton, DividerBlock, OverlayLoader, Wrapper, LinesBackground, ProjectsBackground } from '../../components/common';
import { TimerStartButton } from '../../components/TimerStartButton';
import { ProjectsFilter } from '../../components/ProjectsFilter';
import { ProjectsList } from '../../components/ProjectsList';
import { getProjects, getIsProjectsLoading, fetchProjectsRequest } from '../../ducks';
import { isEmpty } from '../../utils/isEmpty';
import { PROJECTS_PER_REQUEST } from '../../utils/constants';

import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Projects>;
}

export const Projects: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjects);
  const areProjectsLoading = useSelector(getIsProjectsLoading);

  const [skip, setSkip] = React.useState(0);
  const [filter, setFilter] = React.useState<Status | EmptyString>('');

  const addProject = () => navigation.navigate(Routes.NewProject);

  const loadProjects = () => {
    dispatch(fetchProjectsRequest({ skip }));
    setSkip(skip + PROJECTS_PER_REQUEST);
  };

  useFocusEffect(React.useCallback(() => {
    loadProjects();
  }, []));

  const areProjectsExist = !isEmpty(projects);

  const addProjectsButtonStyles = areProjectsExist ? { ...styles.addProject, ...styles.leftAligned } : styles.addProject;

  if (!areProjectsExist && areProjectsLoading) {
    return <OverlayLoader />;
  }

  return (
    <Wrapper style={styles.wrapper}>
      <IconButton
        style={addProjectsButtonStyles}
        accessibilityLabel="add project"
        onPress={addProject}
        colorOnPress="rgba(110, 120, 198, 0.15)"
      >
        <CircePlus />
        <Text style={styles.addProjectLabel}>Add project</Text>
      </IconButton>
      {areProjectsExist
        ? (<>
          <View style={styles.list}>
            {areProjectsLoading && <OverlayLoader variant='small' />}
            <ProjectsList filter={filter} loadMore={loadProjects} />
          </View>
          <ProjectsFilter onChange={setFilter} filter={filter}/>
        </>)
        : (<>
          <DividerBlock height={180} />
          <CreateNewProjectHeader />
          <LinesBackground />
        </>)
      }
      <View style={styles.timerStartButton}><TimerStartButton /></View>
      <ProjectsBackground />
    </Wrapper>
  );
};
