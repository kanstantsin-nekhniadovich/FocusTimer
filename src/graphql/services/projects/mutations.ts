import { gql } from '@apollo/client';

gql`
  enum Status {
    TODO
    INPROGRESS
    COMPLETED
  }

  input CreateProjectInput {
    title: String!
    status: Status!
  }
`;

export const createProject = gql`
  mutation($data: CreateProjectInput!) {
    createProject(data: $data) {
      id
      title
      status
      note
    }
  }
`;

export const deleteProject = gql`
  mutation($id: ID!) {
    deleteProject(id: $id) {
      id
      title
      status
      note
    }
  }
`;
