import { Task } from '@typings';
import React from 'react';
import { Text, View, Animated } from 'react-native';
import { Colors, Typography } from '@styles';

import { formatMillisecondsToMinutes } from '../../utils/date';
import { Status } from '../../utils/constants';
import { CircleProgressBar, ConfirmModal } from '../common';
import { Time, Tick } from '../icons';
import { SwipeableRow } from './SwipeableRow';

import { styles } from './styles';

interface Props {
  task: Task;
  isFirst?: boolean;
}

export const TaskItem: React.FC<Props> = ({ task, isFirst = false }) => {
  const [isRemoveTaskModalOpened, setIsRemoveTaskModalOpened] = React.useState(false);
  const borderRightRadius = React.useRef(new Animated.Value(0)).current;
  const borderLeftRadius = React.useRef(new Animated.Value(0)).current;

  const closeModal = React.useCallback(() => {
    setIsRemoveTaskModalOpened(false);
  }, []);

  const showModal = React.useCallback(() => {
    setIsRemoveTaskModalOpened(true);
  }, []);

  const animateBorderRadius = React.useCallback((property: Animated.Value) => (show: boolean = true) => {
    Animated.timing(property, {
      toValue: show ? 8 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, []);

  const onSwipeableLeftWillOpen = React.useCallback(() => {
    console.log('onSwipeableLeftWillOpen');
    animateBorderRadius(borderLeftRadius)();
  }, [borderLeftRadius]);

  const onSwipeableRightWillOpen = React.useCallback(() => {
    animateBorderRadius(borderRightRadius)();
  }, [borderRightRadius]);

  const onSwipeableWillClose = React.useCallback(() => {
    console.log('onSwipeableWillClose');
    animateBorderRadius(borderRightRadius)(false);
    animateBorderRadius(borderLeftRadius)(false);
  }, [borderRightRadius, borderLeftRadius]);

  const removeTask = React.useCallback(() => {

  }, [task.id]);

  const isNewTask = task.status === Status.TODO && task.workTime === task.remainingTime;
  const isCompletedTask = task.status === Status.COMPLETED && task.remainingTime === 0;

  const progress = isNewTask ? 0 : (task.remainingTime / task.workTime) * 100;

  const itemStyles = {
    ...styles.item,
    ...(isFirst ? styles.firstItem : {}),
    borderTopLeftRadius: borderLeftRadius,
    borderBottomLeftRadius: borderLeftRadius,
  };

  return (
    <SwipeableRow
      onSwipeableLeftWillOpen={onSwipeableLeftWillOpen}
      onSwipeableRightWillOpen={onSwipeableRightWillOpen}
      onActionClick={showModal}
      onSwipeableWillClose={onSwipeableWillClose}
    >
      <Animated.View style={itemStyles}>
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
          onCancel={closeModal}
          onOk={removeTask}
          okText="Remove"
          cancelText="Close"
          messageContent={<Text style={styles.confirmMessage}>
            Are you sure that you want to remove <Text style={Typography.subtitleLarge}>{task.title}</Text> task?
          </Text>}
        />
      </Animated.View>
    </SwipeableRow>
  );
};
