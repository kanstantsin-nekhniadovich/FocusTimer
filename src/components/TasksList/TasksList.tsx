import { Task } from '@typings';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { TaskItem } from '../TaskItem';
import { DividerBlock } from '../common';

import { styles } from './styles';

interface Props {
  tasks: Task[];
}

export const TasksList: React.FC<Props> = ({ tasks }) => {
  return (
    <View style={styles.tasksList}>
      <DividerBlock height={25} />
      <Text style={styles.header}>My tasks</Text>
      <DividerBlock height={15} />
      <ScrollView style={styles.list}>
        {tasks.map((task, index) => (
          <TaskItem isFirst={index === 0} key={task.id} task={task} />
        ))}
      </ScrollView>
    </View>
  );
};
