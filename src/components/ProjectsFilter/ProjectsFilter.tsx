import { Status as StatusType } from '@typings';
import React from 'react';
import { View, Animated } from 'react-native';
import { Colors } from '@styles';

import { FilterItem } from './FilterItem';
import { IconButton, DividerBlock } from '../common';
import { Filter, Tick, Cross } from '../icons';
import { styles } from './styles';
import { isEmpty } from '../../utils/isEmpty';

interface Props {
  filter: StatusType | EmptyString;
  onChange: (status: StatusType | EmptyString) => void;
}

enum Status {
  TODO = 'TODO',
  INPROGRESS = 'INPROGRESS',
  COMPLETED = 'COMPLETED',
}

export const ProjectsFilter: React.FC<Props> = ({ onChange, filter }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [scale, setScale] = React.useState(0);
  const animatedOpacity = React.useRef(new Animated.Value(1)).current;
  const animatedScale = React.useRef(new Animated.Value(1)).current;
  const isFilterApplied = !isEmpty(filter);

  React.useEffect(() => {
    isVisible && setScale(1);
    Animated.timing(animatedOpacity, {
      duration: 200,
      toValue: isVisible ? 1 : 0,
      useNativeDriver: false, 
    }).start(({ finished }) => {
      if (!finished) {
        return;
      }

      !isVisible && setScale(0);
    });
  }, [isVisible, animatedOpacity]);

  React.useEffect(() => {
    Animated.timing(animatedScale, {
      duration: 200,
      toValue: isVisible ? 0 : 1,
      useNativeDriver: false, 
    }).start();
  }, [animatedScale, isVisible]);

  const toggleFilterVisibility = React.useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const filterBlockStyles = React.useMemo(() =>
    ({ ...styles.filterBlock, opacity: animatedOpacity, transform: [{ scale }] })
  ,[animatedOpacity, scale]);

  return (
    <View style={styles.container}>
      <IconButton
        style={styles.iconButton}
        accessibilityLabel="Filter projects list"
        onPress={toggleFilterVisibility}
        colorOnPress="#c8eeee"
      >
        {isFilterApplied &&
          <View style={styles.filterIsAppliedIcon}>
            <Tick width={10} color={Colors.prussianBlue} />
          </View>}
        <Filter />
      </IconButton>
      <Animated.View style={filterBlockStyles}>
        <IconButton
          style={{ ...styles.iconButton, ...styles.crossButton }}
          accessibilityLabel="Filter projects list"
          onPress={toggleFilterVisibility}
          colorOnPress="#c8eeee"
        >
          <Cross color={Colors.prussianBlue} width={12} />
        </IconButton>
        <FilterItem status={Status.TODO} onPress={onChange} label="To do" checked={filter === Status.TODO} />
        <DividerBlock height={12} />
        <FilterItem status={Status.INPROGRESS} onPress={onChange} label="In progress" checked={filter === Status.INPROGRESS} />
        <DividerBlock height={12} />
        <FilterItem status={Status.COMPLETED} onPress={onChange} label="Completed" checked={filter === Status.COMPLETED} />
      </Animated.View>
    </View>
  );
};