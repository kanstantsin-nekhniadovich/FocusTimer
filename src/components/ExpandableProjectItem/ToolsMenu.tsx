import React from 'react';
import { View, Animated, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Project } from '@typings';
import { Typography } from '@styles';

import { toolsMenuStyles } from './styles';
import { Edit, Notes, Delete } from '../icons';
import { IconButton, ConfirmModal } from '../common';
import { Routes } from '../../routes';
import { deleteProjectRequest } from '../../ducks';

interface Props {
  project: Project;
  isVisible: boolean;
}

const ANIMATION_DURATION = 400;
const ANIMATION_DELAY = 100;

export const ToolsMenu: React.FC<Props> = ({ isVisible, project }) => {
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const animatedScale = React.useRef(new Animated.Value(0)).current;

  const onEdit = React.useCallback(() =>
    navigation.navigate(Routes.Project, { id: project.id }), [project]);

  const onEditNote = React.useCallback(() => {
    console.log('on note');
  }, []);

  const removeProject = React.useCallback(() => {
    dispatch(deleteProjectRequest(project.id));
  }, [project]);

  const closeModal = React.useCallback(() => setIsModalOpened(false), []);
  const openModal = React.useCallback(() => setIsModalOpened(true), []);

  React.useEffect(() => {
    Animated.timing(animatedScale, {
      delay: isVisible ? ANIMATION_DELAY : 0,
      duration: ANIMATION_DURATION,
      toValue: isVisible ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [isVisible]);

  const separateLineStyles = React.useMemo(() =>
    ({ ...toolsMenuStyles.separateLine, transform: [{ scale: animatedScale }] }), [animatedScale]);

  return (
    <>
      <Animated.View style={separateLineStyles}></Animated.View>
      <View style={toolsMenuStyles.toolsMenu}>
        <IconButton
          accessibilityLabel='Edit project'
          onPress={onEdit}
        >
          <Edit />
        </IconButton>
        <IconButton
          accessibilityLabel="Edit project's note"
          onPress={onEditNote}
        >
          <Notes />
        </IconButton>
        <IconButton
          accessibilityLabel="Remove project"
          onPress={openModal}
        >
          <Delete width={22} />
        </IconButton>
      </View>
      <ConfirmModal
        title="Remove project"
        visible={isModalOpened}
        onCancel={closeModal}
        onOk={removeProject}
        okText="Remove"
        cancelText="Close"
        messageContent={<Text style={toolsMenuStyles.confirmMessage}>
          Are you sure that you want to remove <Text style={Typography.subtitleLarge}>{project.title}</Text> project?
        </Text>}
      />
    </>
  );
};
