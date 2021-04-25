import { Task } from '@typings';
import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  tasks: Task[];
}

export const TasksList: React.FC<Props> = ({ tasks }) => {
  return (
    <View>
      {tasks.map(task => (
        <Text key={task.id}>{task.title}</Text>
      ))}
    </View>
  );
};
