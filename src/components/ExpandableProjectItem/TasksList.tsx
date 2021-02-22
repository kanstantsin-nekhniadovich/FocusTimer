import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Colors } from '@styles';

import { Tick } from '../icons';
import { isDefined } from '../../utils/isDefined';

import { tasksListStyles } from './styles';
import { Task } from '@typings';

interface Props {
  tasks: Task[];
}

export const TasksList: React.FC<Props> = ({ tasks }) => {
  if (!isDefined(tasks)) {
    return null;
  }

  return (
    <View style={tasksListStyles.list}>
      <ScrollView>
        {tasks.map(task =>
          <View style={tasksListStyles.task} key={task.id}>
            {task.status === 'COMPLETED'
              ? <Tick width={16} color={Colors.prussianBlue} />
              : <View style={tasksListStyles.incompletedTaskIcon} />}
            <Text style={tasksListStyles.label}>{task.title}</Text>
          </View>)}
      </ScrollView>
    </View>
  );
};
