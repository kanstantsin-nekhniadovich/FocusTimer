import { gql } from '@apollo/client';

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
    }
  }
`;
