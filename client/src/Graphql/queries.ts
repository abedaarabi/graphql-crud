import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUser {
    getAllUser {
      name
      username
      id
    }
  }
`;
