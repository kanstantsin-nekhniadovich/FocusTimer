import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Typography } from '@styles';

import { getTaskById, isCompletedTask, deleteTaskRequest } from '../../ducks';
import { IconButton, ConfirmModal } from '../common';
import { Play, Tick, Delete } from '../icons';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';

import { styles } from './styles';

interface Props {
  route: Route<Routes.Task, Screens['Task']>;
}

export const TaskHeaderControls = ({ route }: Props): JSX.Element | null => {
  const dispatch = useDispatch();
  const { id, projectId } = route.params;
  const [isRemoveTaskModalOpened, setIsRemoveTaskModalOpened] = React.useState(false);
  const task = useSelector(getTaskById(projectId, id));

  if (!isDefined(task)) {
    return null;
  }

  const isTaskCompleted = isCompletedTask(task);

  const onPlay = () => {
    console.log('on play');
  };

  const makeCompleted = () => {
    console.log('make completed');
  };

  const openModal = () => setIsRemoveTaskModalOpened(true);
  const closeModal = () => setIsRemoveTaskModalOpened(false);

  const removeTask = () => {
    dispatch(deleteTaskRequest(task.id));
  };

  return (
    <View style={styles.controls}>
      {!isTaskCompleted && <IconButton
        style={styles.button}
        accessibilityLabel={`Run ${task.title} project`}
        onPress={onPlay}
      >
        <Play width={22} />
      </IconButton>}
      {!isTaskCompleted && <IconButton
        style={styles.button}
        accessibilityLabel={`Make ${task.title} as completed`}
        onPress={makeCompleted}
      >
        <Tick width={22} />
      </IconButton>}
      <IconButton
        style={styles.button}
        accessibilityLabel={`Delete ${task.title}`}
        onPress={openModal}
      >
        <Delete width={22} />
      </IconButton>
      <ConfirmModal
        title="Remove task"
        isVisible={isRemoveTaskModalOpened}
        onCancel={closeModal}
        onOk={removeTask}
        okText="Remove"
        cancelText="Close"
        closeOnClickOutside={false}
        messageContent={<Text style={styles.confirmMessage}>
    Are you sure that you want to remove <Text style={Typography.subtitleLarge}>{task.title}</Text> task?
        </Text>}
      />
    </View>
  );
};
