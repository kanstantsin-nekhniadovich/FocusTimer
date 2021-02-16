import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { Routes } from '../../routes';
import { getProjectById } from '../../ducks';

type Props = StackScreenProps<Screens, Routes.Project>;

export const Project: React.FC<Props> = ({ route }) => {
  const project = useSelector(getProjectById(route.params.id));

  return (
    <View>
      <Text>{project.title}</Text>
    </View>  
  );
};
