import { gql } from 'graphql-request';

export const tasks = gql`
  query {
    tasks {
      id
      title
      cyclesCount
      workTime
      breakTime
      status
      remainingTime
      currentCycle
      projectId
    }
  }
`;
