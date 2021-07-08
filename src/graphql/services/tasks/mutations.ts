import { gql } from 'graphql-request';

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

  input UpdateTaskInput {
    title: String
    cyclesCount: Int
    workTime: Int
    breakTime: Int
    status: Status
    remainingTime: Int
    currentCycle: Int
  }

  input UniqueIdInput {
    id: ID!
  }
`;

export const createTask = gql`
  mutation($data: CreateTaskInput!) {
    createTask(data: $data) {
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

export const updateTask = gql`
  mutation($data: UpdateTaskInput!, $where: UniqueIdInput!) {
    updateTask(data: $data, where: $where) {
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

export const deleteTask = gql`
  mutation($id: ID!) {
    deleteTask(id: $id) {
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
