import { Project } from '@typings';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { Routes } from '../../routes';
import { CreateNewProjectHeader, CircePlus } from '../../components/icons';
import { IconButton, ProjectsBackground, DividerBlock, OverlayLoader, LinesBackground } from '../../components/common';
import { TimerStartButton } from '../../components/TimerStartButton';
import { ExpandableProjectItem } from '../../components/ExpandableProjectItem';
import { fetchProjectsRequest, getProjects, getIsProjectsLoading, getProjectTotalCount } from '../../ducks';
import { isEmpty } from '../../utils/isEmpty';
import { PROJECTS_PER_REQUEST } from '../../settings';

import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Projects>;
}

export const Projects: React.FC<Props> = ({ navigation }) => {
  const [skip, setSkip] = React.useState(0);
  const dispatch = useDispatch();
  const projects = useSelector(getProjects);
  const totalCount = useSelector(getProjectTotalCount);
  const areProjectsLoading = useSelector(getIsProjectsLoading);
  const addProject = React.useCallback(() => navigation.navigate(Routes.NewProject), [navigation]);

  const loadProjects = React.useCallback(() => {
    dispatch(fetchProjectsRequest({ skip }));
    setSkip(skip + PROJECTS_PER_REQUEST);
  }, [skip]);

  React.useEffect(() => {
    loadProjects();
  }, []);

  const renderItem = React.useCallback(({ item }) => <ExpandableProjectItem project={item} />, []);

  const onEndReached = React.useCallback(() => {
    if (projects.length === totalCount) {
      return;
    }

    loadProjects();
  }, [totalCount, loadProjects, projects]);

  const thereAreNoProjects = isEmpty(projects);

  const addProjectsButtonStyles = React.useMemo(() =>
    thereAreNoProjects ? styles.addProject : { ...styles.addProject, ...styles.leftAligned }, [thereAreNoProjects]);

  if (thereAreNoProjects && areProjectsLoading) {
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
        : (<View style={styles.list}>
          {areProjectsLoading && <OverlayLoader variant='small' />}
          <FlatList<Project>
            data={projects}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
          />
        </View>)
      }
      <View style={styles.timerStartButton}><TimerStartButton /></View>
      <ProjectsBackground />
    </View>
  );
};
