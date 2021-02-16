import React from 'react';
import { View } from 'react-native';

import { CreateProjectForm } from './CreateProjectForm';
import { ProjectsBackground, LinesBackground } from '../../components/common';

import { styles } from './styles';

export const NewProject = () => {
  return (
    <View style={styles.container}>
      <LinesBackground />
      <ProjectsBackground />
      <CreateProjectForm />
    </View>
  );
};
