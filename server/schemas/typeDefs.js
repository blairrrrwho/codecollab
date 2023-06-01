const { gql } = require("apollo-server-express");

// imported schema dummy files from my challenge 21; will have to rework the code 
const typeDefs = gql`
    type Post {
        _id: ID
        postText: String
        createdAt: Date
        username: String
        comments: [commentSchema]
    }

    type Comment {
        _id: ID
        commentBody: String
        createdAt: Date
        username: String
    }

    type User {
        _id: ID
        firstname: String
        lastname: String
        username: String
        email: String
        password: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        post(id: ID!): Post
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        
        addBook(
            userId: ID!
            authors: [String]!
            description: String!
            bookId: String!
            image: String!
            link: String!
            title: String!
        ): User
        removeUser(userId: ID!): User
        removeBook(userId: String!, bookId: String!): User
    }
`;

module.exports = typeDefs;