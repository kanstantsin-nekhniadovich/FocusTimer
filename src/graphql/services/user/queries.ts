import { gql } from 'graphql-request';

export const user = gql`
  query {
    user {
      id
      email
      name
      avatarUrl
    }
  }
`;
