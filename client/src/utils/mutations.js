import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_POST = gql`
mutation Mutation($postText: String!, $username: String!, $postTitle: String!) {
  addPost(postText: $postText, username: $username, postTitle: $postTitle) {
    _id
    postTitle
    postText
    username
    createdAt
    comments {
      _id
      commentBody
    }
  }
}
`;

export const ADD_USER = gql`
mutation Mutation($firstname: String!, $lastname: String!, $username: String!, $email: String!, $password: String!) {
  addUser(firstname: $firstname, lastname: $lastname, username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      firstname
      lastname
      password
      username
    }
  }
}
`;

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
`;
