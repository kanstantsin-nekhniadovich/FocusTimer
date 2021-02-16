import React from 'react';
import { Pressable, Text, View, Animated } from 'react-native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { Project, Status } from '@typings';

import { ToolsMenu } from './ToolsMenu';
import { IconButton } from '../common';
import { Play, Arrow, Restore } from '../icons';
import { styles } from './styles';

interface Props {
  project: Project;
}

const GRADIENT_CONFIG: Record<Status, LinearGradientProps> = {
  TODO: {
    colors: ['#707070', '#C9C9C9', '#484848'],
    start: [1, 1],
    end: [0, 0],
    locations: [0, 0.8156, 1],
  },
  INPROGRESS: {
    colors: ['rgba(99, 13, 106, 0.72)', 'rgba(153, 24, 164, 0.27)', 'rgba(153, 24, 164, 0.405405)', '#7B1A83'],
    start: [0, 1],
    end: [1, 0],
    locations: [0.00259, 0.2084, 0.368, 1],
  },
  COMPLETED: {
    colors: ['#07AB98', '#1DD98D'],
    start: [1, 0],
    end: [0, 1],
    locations: [0, 1],
  },
};

const SMALL_ITEM_HEIGHT = 64;
const BIG_ITEM_HEIGHT = 120;

export const ExpandableProjectItem: React.FC<Props> = ({ project }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isToolsMenuOpened, setIsToolsMenuOpened] = React.useState(false);
  
  const animatedHeight = React.useRef(new Animated.Value(SMALL_ITEM_HEIGHT)).current;
  const animatedRotate = React.useRef(new Animated.Value(0)).current;
  const animatedOpacity = React.useRef(new Animated.Value(0)).current;
  
  const gradientConfig = GRADIENT_CONFIG[project.status];
  const isCompleted = project.status === 'COMPLETED';

  const toggleExpandProject = React.useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded, isToolsMenuOpened]);

  const onLongPress = React.useCallback(() => {
    if (isExpanded && !isToolsMenuOpened) {
      return;
    }

    !isToolsMenuOpened && setIsToolsMenuOpened(true);
    setIsExpanded(!isExpanded);
  }, [isToolsMenuOpened, isExpanded]);

  const onPlay = React.useCallback(() => {
    console.log('on play');
  }, []);

  const animateExpanding = React.useCallback((enable: boolean) => {
    Animated.parallel([
      Animated.timing(animatedHeight, {
        duration: 200,
        toValue: enable ? BIG_ITEM_HEIGHT : SMALL_ITEM_HEIGHT,
        useNativeDriver: false,
      }),
      Animated.timing(animatedRotate, {
        duration: 200,
        toValue: enable ? 1 : 0,
        useNativeDriver: false,
      }),
      Animated.timing(animatedOpacity, {
        delay: enable ? 100 : 0,
        duration: enable ? 120 : 60,
        toValue: enable ? 1 : 0,
        useNativeDriver: false,
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

  const arrowHolderStyles = React.useMemo(() =>
    ({ ...styles.arrowButtonHolder, transform: [{ rotate: animatedRotateValue }] })
  , [animatedRotateValue]);

  return (
    <Animated.View
      style={{...styles.item, height: animatedHeight }}>
      <LinearGradient
        {...gradientConfig}
        style={styles.gradient}
      />
      <View style={styles.titleHolder}>
        <IconButton
          accessibilityLabel={`Run ${project.title} project`}
          onPress={onPlay}
        >
          {isCompleted ? <Restore /> : <Play />}
        </IconButton>
        <Pressable style={styles.titleButton} onLongPress={onLongPress}>
          <Text numberOfLines={1} style={styles.title}>{project.title}</Text>
        </Pressable>
        <Animated.View style={arrowHolderStyles}>
          <IconButton
            accessibilityLabel="Expand project"
            onPress={toggleExpandProject}
            colorOnPress="transparent"
            style={styles.arrowButton}
          >
            <Arrow />
          </IconButton>
        </Animated.View>
      </View>
      <Animated.View style={{ opacity: animatedOpacity }}>
        {isToolsMenuOpened
          ? <ToolsMenu isVisible={isToolsMenuOpened} />
          : <View><Text>Tasks list</Text></View>
        }
      </Animated.View>
      <Text style={styles.tasksIndicator}>0/12</Text>
    </Animated.View>
  );
};
