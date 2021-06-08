import { Task } from '@typings';
import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '@styles';

import { formatMillisecondsToMinutes } from '../../utils/date';
import { Status } from '../../utils/constants';
import { CircleProgressBar } from '../common';
import { Time, Tick } from '../icons';

import { itemStyles as styles } from './styles';

interface Props {
  task: Task;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  const isNewTask = task.status === Status.TODO && task.workTime === task.remainingTime;
  const isCompletedTask = task.status === Status.COMPLETED && task.remainingTime === 0;

  const progress = isNewTask ? 0 : (task.remainingTime / task.workTime) * 100;

  return (
    <View style={styles.item}>
      <View style={styles.titleHolder}>
        {isCompletedTask
          ? <Tick />
          : <CircleProgressBar size={36} strokeWidth={3} progress={progress} progressColor={Colors.darkBlue} />
        }
        <Text style={styles.title} numberOfLines={1}>{task.title}</Text>
      </View>
      {isNewTask
        ? <Text style={styles.newTaskLabel}>New Task</Text>
        : (!isCompletedTask &&
          <View style={styles.timeHolder}>
            <Time />
            <Text style={styles.remainingTime}>{formatMillisecondsToMinutes(task.remainingTime)}</Text>
          </View>)
      }
    </View>
  );
};
