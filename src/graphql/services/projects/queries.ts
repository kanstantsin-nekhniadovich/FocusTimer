import { gql } from '@apollo/client';

export const projects = gql`
  query {
    projects {
      id
      title
      status
      note
      tasks {
        id
        title
        cyclesCount
        workTime
        breakTime
        status
        remainingTime
        currentCycle
      }
    }
  }
`;
