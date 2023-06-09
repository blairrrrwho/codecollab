const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Post {
        _id: ID
        postTitle: String
        postText: String
        createdAt: String!      
        username: String
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentBody: String
        createdAt: String!
        username: String
    }

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        username: String!
        email: String!
        password: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        allUsers: [User]
        userById(userId: ID!): User
        allPosts:[Post]
        postsByUser(username: String!): [Post]
        postById(postId: ID!): Post
        
    }

    type Mutation {
        addUser(firstname: String!, lastname: String!, username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPost(postTitle: String!, postText: String!, username: String!): Post
        removeUser(userId: ID!): User
        
        addComment(postId: ID!, commentBody: String!, username: String!): Post
        

        removeBook(userId: String!, bookId: String!): User
    }
`;

module.exports = typeDefs;