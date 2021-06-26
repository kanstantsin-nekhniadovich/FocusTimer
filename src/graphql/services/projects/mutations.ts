import { gql } from 'graphql-request';

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

  input UpdateProjectInput {
    title: String
    status: Status
    note: String
  }

  input UniqueIdInput {
    id: ID!
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

export const updateProject = gql`
  mutation($data: UpdateProjectInput!, $where: UniqueIdInput!) {
    updateProject(data: $data, where: $where) {
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
      project {
        id
        title
        status
        note
      }
      totalCount
    }
  }
`;
