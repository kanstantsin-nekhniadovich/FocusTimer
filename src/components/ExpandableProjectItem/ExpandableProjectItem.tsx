import React from 'react';
import { Text, View, Animated } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import { Project, Status } from '@typings';
import { useSelector } from 'react-redux';
import { Colors } from '@styles';

import { getTasksForProject } from '../../ducks';
import { ToolsMenu } from './ToolsMenu';
import { IconButton } from '../common';
import { Play, Arrow, Restore } from '../icons';
import { styles } from './styles';
import { Routes } from '../../routes';
import { isDefined } from '../../utils/isDefined';
import { isEmpty } from '../../utils/isEmpty';

interface Props {
  project: Project;
}

const SMALL_ITEM_HEIGHT = 60;
const BIG_ITEM_HEIGHT = 110;
const ANIMATION_DURATION = 300;

const statusColors: Record<Status, string> = Object.freeze({
  TODO: Colors.todo as string,
  INPROGRESS: Colors.inprogress as string,
  COMPLETED: Colors.completed as string,
});

export const ExpandableProjectItem: React.FC<Props> = ({ project }) => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isToolsMenuOpened, setIsToolsMenuOpened] = React.useState(false);
  const tasks = useSelector(getTasksForProject(project));

  const animatedHeight = React.useRef(new Animated.Value(SMALL_ITEM_HEIGHT)).current;
  const animatedRotate = React.useRef(new Animated.Value(0)).current;
  const animatedOpacity = React.useRef(new Animated.Value(0)).current;

  const isCompleted = project.status === 'COMPLETED';
  const completedTasksCount = tasks.filter(task => task.status === 'COMPLETED').length;

  const toggleExpandProject = React.useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded, isToolsMenuOpened]);

  const toggleMenuToolsVisibility = React.useCallback(() => {
    if (isExpanded && !isToolsMenuOpened) {
      return;
    }

    !isToolsMenuOpened && setIsToolsMenuOpened(true);
    setIsExpanded(!isExpanded);
  }, [isToolsMenuOpened, isExpanded]);

  const navigateToProject = React.useCallback(() =>
    navigation.navigate(Routes.Project, { id: project.id }), [project]);

  const onPlay = React.useCallback(() => {
    console.log('on play');
  }, []);

  const animateExpanding = React.useCallback((enable: boolean) => {
    Animated.parallel([
      Animated.timing(animatedHeight, {
        duration: ANIMATION_DURATION,
        toValue: enable ? BIG_ITEM_HEIGHT : SMALL_ITEM_HEIGHT,
        useNativeDriver: false,
      }),
      Animated.timing(animatedRotate, {
        duration: ANIMATION_DURATION,
        toValue: enable ? 1 : 0,
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacity, {
        delay: enable ? 200 : 0,
        duration: enable ? 150 : 80,
        toValue: enable ? 1 : 0,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished && isToolsMenuOpened && !isExpanded) {
        setIsToolsMenuOpened(false);
      }
    });
  }, [animatedHeight, animatedRotate, animatedOpacity, isToolsMenuOpened, isExpanded]);

  React.useEffect(() => {
    animateExpanding(isExpanded);
  }, [isExpanded]);

  const animatedRotateValue = animatedRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const arrowHolderStyles = { ...styles.arrowButtonHolder, transform: [{ rotate: animatedRotateValue }] };

  const indicatorStyles = {
    ...styles.indicator,
    backgroundColor: statusColors[project.status],
  };

  const noteExists = isDefined(project.note) && !isEmpty(project.note);

  return (
    <Animated.View
      style={{ ...styles.item, height: animatedHeight }}>
      <View style={indicatorStyles} />
      <View style={styles.titleHolder}>
        <IconButton
          style={styles.runProjectButton}
          accessibilityLabel={`Run ${project.title} project`}
          onPress={onPlay}
        >
          {isCompleted ? <Restore /> : <Play />}
        </IconButton>
        <Ripple
          style={styles.pressableTitle}
          onLongPress={toggleMenuToolsVisibility}
          onPress={navigateToProject}
          rippleContainerBorderRadius={8}
        >
          <Text numberOfLines={1} style={styles.title}>{project.title}</Text>
        </Ripple>
        {noteExists && <Animated.View style={arrowHolderStyles}>
          <IconButton
            accessibilityLabel="Expand project"
            onPress={toggleExpandProject}
            colorOnPress="transparent"
            style={styles.arrowButton}
          >
            <Arrow />
          </IconButton>
        </Animated.View>}
      </View>
      <Animated.View style={{ opacity: animatedOpacity }}>
        {isToolsMenuOpened
          ? <ToolsMenu isVisible={isToolsMenuOpened} project={project} />
          : <View style={styles.noteHolder}>
            <Text style={styles.note}>{project.note}</Text>
          </View>
        }
      </Animated.View>
      {!isToolsMenuOpened && <Text style={styles.tasksIndicator}>{completedTasksCount}/{tasks.length}</Text>}
    </Animated.View>
  );
};
