import { Status } from '@typings';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Colors } from '@styles';

import { Tick } from '../icons';

import { filterItemStyles } from './styles';

interface Props {
  onPress: (status: Status | EmptyString) => void;
  label: string;
  status: Status;
  checked: boolean;
}

const statusColors: Record<Status, string> = Object.freeze({
  TODO: Colors.todo as string,
  INPROGRESS: Colors.inprogress as string,
  COMPLETED: Colors.completed as string,
});

export const FilterItem: React.FC<Props> = ({ onPress, label, status, checked }) => {
  const onPressHandler = () => onPress(checked ? '' : status);

  const style = {
    ...filterItemStyles.item,
    backgroundColor: statusColors[status],
  };

  return (
    <TouchableOpacity style={style} onPress={onPressHandler}>
      <Text style={filterItemStyles.label}>{label}</Text>
      {checked && <View style={filterItemStyles.tick}><Tick width={10} color={Colors.prussianBlue} /></View>}
    </TouchableOpacity>
  );
};
