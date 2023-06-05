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

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
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