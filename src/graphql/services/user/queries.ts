import { gql } from '@apollo/client';

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
