import React from 'react';

import { CreateProjectForm } from './CreateProjectForm';
import { ProjectsBackground, LinesBackground, Wrapper, DividerBlock } from '../../components/common';

export const NewProject = () => {
  return (
    <Wrapper>
      <DividerBlock height={60} />
      <LinesBackground />
      <ProjectsBackground />
      <CreateProjectForm />
    </Wrapper>
  );
};
