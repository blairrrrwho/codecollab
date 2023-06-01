import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user ($username: String!) {
    user(username: $username)  {
      _id
      firstname
      lastname
      username
      email
      password
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
