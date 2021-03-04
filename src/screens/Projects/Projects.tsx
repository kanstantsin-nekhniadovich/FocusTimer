import { Project, Status } from '@typings';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { Routes } from '../../routes';
import { CreateNewProjectHeader, CircePlus } from '../../components/icons';
import { IconButton, DividerBlock, OverlayLoader, Wrapper, LinesBackground, ProjectsBackground } from '../../components/common';
import { TimerStartButton } from '../../components/TimerStartButton';
import { ExpandableProjectItem } from '../../components/ExpandableProjectItem';
import { ProjectsFilter } from '../../components/ProjectsFilter';
import { fetchProjectsRequest, getProjects, getIsProjectsLoading, getProjectTotalCount } from '../../ducks';
import { isEmpty } from '../../utils/isEmpty';
import { PROJECTS_PER_REQUEST } from '../../settings';

import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.Projects>;
}

export const Projects: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjects);
  const totalCount = useSelector(getProjectTotalCount);
  const areProjectsLoading = useSelector(getIsProjectsLoading);

  const [skip, setSkip] = React.useState(0);
  const [filter, setFilter] = React.useState<Status | EmptyString>('');

  const filteredProjects = React.useMemo(() =>
    isEmpty(filter) ? projects : projects.filter(project => project.status === filter), [projects, filter]);

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
    if (projects.length >= totalCount) {
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
      {thereAreNoProjects
        ? (<>
          <DividerBlock height={180} />
          <CreateNewProjectHeader />
          <LinesBackground />
        </>)
        : (<>
          <View style={styles.list}>
            {areProjectsLoading && <OverlayLoader variant='small' />}
            <FlatList<Project>
              data={filteredProjects}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              onEndReached={onEndReached}
              onEndReachedThreshold={0.1}
              style={styles.flatList}
            />
          </View>
          <ProjectsFilter onChange={setFilter} filter={filter}/>
        </>)
      }
      <View style={styles.timerStartButton}><TimerStartButton /></View>
      <ProjectsBackground />
    </Wrapper>
  );
};
