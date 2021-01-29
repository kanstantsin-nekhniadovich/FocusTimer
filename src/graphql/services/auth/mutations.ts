import { gql } from '@apollo/client';

export const login = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      firebaseToken
      user {
        id
        name
        email
        avatarUrl
      }
    }
  }`;

export const facebookLogin = gql`
  mutation($email: String!) {
    facebookLogin(email: $email) {
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
