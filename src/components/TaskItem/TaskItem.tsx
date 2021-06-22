import { Task } from '@typings';
import React from 'react';
import { useDispatch } from 'react-redux';
import Ripple from 'react-native-material-ripple';
import { Text, View, Animated } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Colors, Typography } from '@styles';

import { deleteTaskRequest } from '../../ducks';
import { formatMillisecondsToMinutes } from '../../utils/date';
import { Status } from '../../utils/constants';
import { CircleProgressBar, ConfirmModal } from '../common';
import { Time, Tick } from '../icons';
import { SwipeableRow } from './SwipeableRow';

import { styles } from './styles';
import { Routes } from '../../routes';

interface Props {
  task: Task;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  const navigation = useNavigation<NavigationProp<Screens, Routes.Project>>();
  const dispatch = useDispatch();
  const [isRemoveTaskModalOpened, setIsRemoveTaskModalOpened] = React.useState(false);

  const closeModal = (close: () => void) => () => {
    setIsRemoveTaskModalOpened(false);
    close();
  };

  const showModal = () => {
    setIsRemoveTaskModalOpened(true);
  };

  const removeTask = (close: () => void) => () => {
    dispatch(deleteTaskRequest(task.id));
    close();
  };

  const onPress = () =>
    navigation.navigate({
      name: Routes.Task,
      params: { projectId: task.projectId, id: task.id }
    });

  const isNewTask = task.status === Status.TODO && task.workTime === task.remainingTime;
  const isCompletedTask = task.status === Status.COMPLETED && task.remainingTime === 0;

  const progress = isNewTask ? 0 : (task.remainingTime / task.workTime) * 100;

  return (
    <SwipeableRow onSwipeableOpenAction={showModal}>
      {({ close }) => (
        <Ripple onPress={onPress} rippleContainerBorderRadius={8}>
          <Animated.View style={styles.item}>
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
            <ConfirmModal
              title="Remove task"
              isVisible={isRemoveTaskModalOpened}
              onCancel={closeModal(close)}
              onOk={removeTask(close)}
              okText="Remove"
              cancelText="Close"
              closeOnClickOutside={false}
              messageContent={<Text style={styles.confirmMessage}>
          Are you sure that you want to remove <Text style={Typography.subtitleLarge}>{task.title}</Text> task?
              </Text>}
            />
          </Animated.View>
        </Ripple>
      )}
    </SwipeableRow>
  );
};
