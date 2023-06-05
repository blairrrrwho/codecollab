import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $commentBody: String!, $username: String!) {
    addComment(postId: $postId, commentBody: $commentBody, username: $username) {
      _id
      postText
      postTitle
      createdAt
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