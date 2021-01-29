import { gql } from '@apollo/client';

gql`
  input CreateUserInput {
    email: String!
    password: String!
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
    avatarUrl: String
  }

  input CreateFacebookUserInput {
    email: String!
    name: String!
    avatarUrl: String!
  }
`;


export const createUser = gql`
  mutation($data: CreateUserInput!) {
    createUser(data: $data) {
      token
      firebaseToken
      user {
        id
        name
        email
        avatarUrl
      }
    }
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

export const createFacebookUser = gql`
  mutation($data: CreateFacebookUserInput!) {
    createFacebookUser(data: $data) {
      token
      firebaseToken
      user {
        id
        name
        email
        avatarUrl
      }
    }
  }
`;
