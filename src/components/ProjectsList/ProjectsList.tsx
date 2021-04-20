import { Project, Status } from '@typings';
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ExpandableProjectItem } from '../../components/ExpandableProjectItem';
import { getProjects, getProjectTotalCount } from '../../ducks';
import { isEmpty } from '../../utils/isEmpty';

import { EmptyProjectsList } from './EmptyProjectsList';
import { styles } from './styles';

interface Props {
  filter: Status | EmptyString;
  loadMore: () => void;
}

export const ProjectsList: React.FC<Props> = ({ filter, loadMore }) => {
  const projects = useSelector(getProjects);
  const totalCount = useSelector(getProjectTotalCount);

  const filteredProjects = React.useMemo(() =>
    isEmpty(filter) ? projects : projects.filter(project => project.status === filter), [projects, filter]);

  const renderItem = React.useCallback(({ item }) => <ExpandableProjectItem project={item} />, []);

  const onEndReached = React.useCallback(() => {
    if (projects.length >= totalCount) {
      return;
    }

    loadMore();
  }, [totalCount, loadMore, projects]);

  return (
    <FlatList<Project>
      data={filteredProjects}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      style={styles.list}
      ListEmptyComponent={EmptyProjectsList}
    />
  );
};
