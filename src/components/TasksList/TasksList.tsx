import { Task } from '@typings';
import React from 'react';
import { View } from 'react-native';
import { Colors } from '@styles';

import { TaskItem } from './TaskItem';
import { CircleProgressBar } from '../common';

import { styles } from './styles';

interface Props {
  tasks: Task[];
}

export const TasksList: React.FC<Props> = ({ tasks }) => {
  return (
    <View style={styles.list}>
      <CircleProgressBar size={36} strokeWidth={3} progress={56} progressColor={Colors.darkBlue} />
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </View>
  );
};
