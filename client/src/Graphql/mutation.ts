import { gql } from "@apollo/client";

export const CERATE_USER = gql`
  mutation createuser($name: String!, $username: String!, $password: String!) {
    createuser(name: $name, username: $username, password: $password) {
      id
      name
      username
    }
  }
`;

export const DELETE_USERS = gql`
  mutation deleteuser($id: ID!) {
    deleteuser(id: $id) {
      isSuccessful
      message
    }
  }
`;
