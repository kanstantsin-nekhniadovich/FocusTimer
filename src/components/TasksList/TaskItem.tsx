import { Task } from '@typings';
import React from 'react';
import { Text, View } from 'react-native';

import { formatMillisecondsToMinutes } from '../../utils/date';
import { Status } from '../../utils/constants';
import { Time } from '../icons';

import { itemStyles as styles } from './styles';

interface Props {
  task: Task;
}

// export const NewTask = () => {
//   return (
//     <>
//       <Text style={styles.newTaskLabel}>New Task</Text>

//     </>
//   )
// }

export const TaskItem: React.FC<Props> = ({ task }) => {
  const isNewTask = task.status === Status.TODO && task.workTime === task.remainingTime;

  return (
    <View style={styles.item}>
      <Text style={styles.title} numberOfLines={1}>{task.title}</Text>
      {isNewTask
        ? <Text style={styles.newTaskLabel}>New Task</Text>
        : (<>
          <Time />
          <Text style={styles.remainingTime}>{formatMillisecondsToMinutes(task.remainingTime)}</Text>
        </>)
      }
    </View>
  );
};
