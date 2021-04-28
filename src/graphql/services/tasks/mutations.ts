import { gql } from '@apollo/client';

gql`
  input UniqueIdInput {
    id: ID!
  }

  input ConnectTaskToProject {
    connect: UniqueIdInput
  }

  input CreateTaskInput {
    title: String!
    cyclesCount: Int!
    workTime: Int!
    breakTime: Int!
    status: Status!
    remainingTime: Int!
    currentCycle: Int!
    project: ConnectTaskToProject!
  }
`;

export const createTask = gql`
  mutation($data: CreateTaskInput!) {
    createTask(data: $data) {
      id,
      title,
      cyclesCount,
      workTime,
      breakTime,
      status,
      remainingTime,
      currentCycle,
      project {
        id
      }
    }
  }
`;
