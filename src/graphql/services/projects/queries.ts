import { gql } from '@apollo/client';

export const projects = gql`
  query($skip: Int, $take: Int) {
    projects(skip: $skip, take: $take) {
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
          projectId
        }
      }
      totalCount
    }
  }
`;
