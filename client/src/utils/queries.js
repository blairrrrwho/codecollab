import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
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

export const QUERY_POSTS = gql`
  query post($_id: String) {
    post(_id: $_id) {
      _id
      postText
      createdAt
      username
      comments {
        commentId,
        commentBody,
        username,
        createdAt
      }
 
    }
  }
`;
