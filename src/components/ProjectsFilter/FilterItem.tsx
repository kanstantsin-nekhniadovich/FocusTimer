import { Status } from '@typings';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Colors } from '@styles';

import { StatusGradient } from '../common';
import { Tick } from '../icons';

import { filterItemStyles } from './styles';

interface Props {
  onPress: (status: Status | EmptyString) => void;
  label: string;
  status: Status;
  checked: boolean;
}

export const FilterItem: React.FC<Props> = ({ onPress, label, status, checked }) => {
  const onPressHandler = React.useCallback(() => onPress(checked ? '' : status), [status, onPress, checked]);

  return (
    <TouchableOpacity style={filterItemStyles.item} onPress={onPressHandler}>
      <StatusGradient status={status} style={filterItemStyles.gradient} />
      <Text style={filterItemStyles.label}>{label}</Text>
      {checked && <View style={filterItemStyles.tick}><Tick width={10} color={Colors.prussianBlue} /></View>}
    </TouchableOpacity>
  );
};
