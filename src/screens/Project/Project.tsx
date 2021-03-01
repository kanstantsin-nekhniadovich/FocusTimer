import React from 'react';
import { Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { Wrapper } from '../../components/common';
import { Routes } from '../../routes';
import { getProjectById } from '../../ducks';
import { isDefined } from '../../utils/isDefined';

type Props = StackScreenProps<Screens, Routes.Project>;

export const Project: React.FC<Props> = ({ route }) => {
  const project = useSelector(getProjectById(route.params.id));

  if (!isDefined(project)) {
    return (
      <Wrapper>
        <Text>Project is not found</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Text>{project.title}</Text>
    </Wrapper>
  );
};
