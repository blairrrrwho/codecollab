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
  query post($username: String) {
    post(username: $username) {
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

export const ALL_POSTS = gql`
query AllPosts {
  allPosts {
    _id
    createdAt
    postText
    username
  }
}
`