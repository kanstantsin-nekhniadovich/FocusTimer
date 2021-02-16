import { Project } from '@typings';
import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';

import { getProjects, getIsProjectsLoading } from '../../ducks';
import { OverlayLoader } from '../common';
import { ExpandableProjectItem } from '../ExpandableProjectItem';
import { styles } from './styles';

export const ProjectsList = () => {
  const projects = useSelector(getProjects);
  const isLoading = useSelector(getIsProjectsLoading);

  const renderItem = React.useCallback(({ item }) => <ExpandableProjectItem project={item} />, []);
  const projectsList = React.useMemo(() => Object.values(projects), [projects]);

  return (
    <View style={styles.container}>
      {isLoading && <OverlayLoader />}
      <FlatList<Project>
        data={projectsList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
