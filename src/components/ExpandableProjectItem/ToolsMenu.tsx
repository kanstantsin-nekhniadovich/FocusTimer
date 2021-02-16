import React from 'react';
import { View, Animated } from 'react-native';

import { toolsMenuStyles } from './styles';
import { Edit, Notes, Delete } from '../icons';
import { IconButton } from '../common';

interface Props {
  isVisible: boolean;
}

const ANIMATION_DURATION = 400;
const ANIMATION_DELAY = 100;

export const ToolsMenu: React.FC<Props> = ({ isVisible }) => {
  const animatedScale = React.useRef(new Animated.Value(0)).current;

  const onEdit = React.useCallback(() => {
    console.log('on edit');
  }, []);

  const onEditNote = React.useCallback(() => {
    console.log('on note');
  }, []);

  const onDelete = React.useCallback(() => {
    console.log('on delete');
  }, []);

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
          onPress={onDelete}
        >
          <Delete />
        </IconButton>
      </View>
    </>
  );
};
