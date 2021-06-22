import { Task } from '@typings';
import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { TaskItem } from '../TaskItem';

import { styles } from './styles';

interface Props {
  tasks: Task[];
}

const renderItem = ({ item }: { item: Task }) => <TaskItem key={item.id} task={item} />;

const renderSeparator = () => <View style={styles.separator} />;

export const TasksList: React.FC<Props> = ({ tasks }) => (
  <View style={styles.tasksList}>
    <Text style={styles.header}>My tasks</Text>
    <FlatList<Task>
      style={styles.list}
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={renderSeparator}
      ListFooterComponent={renderSeparator}
      showsVerticalScrollIndicator={false}
    />
  </View>
);
