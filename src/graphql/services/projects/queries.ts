import { gql } from '@apollo/client';

export const projects = gql`
  query($skip: Int, $first: Int) {
    projects(skip: $skip, first: $first) {
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
          project {
            id
          }
        }
      }
      totalCount
    }
  }
`;
