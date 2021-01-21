import { gql } from '@apollo/client';

gql`
  input UpdateUserInput {
    name: String
    email: String
    password: String
    avatarUrl: String
  }
`;


export const updateUser = gql`
  mutation($data: UpdateUserInput!) {
    updateUser(data: $data) {
      id
      email
      name
      avatarUrl
    }
  }
`;
