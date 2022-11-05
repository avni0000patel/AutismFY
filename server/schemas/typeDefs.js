const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
    posts: [Post]!
    post(postId: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(name: String!): Post
    addCaption(postId: ID!, caption: String!): Post
    removePost(postId: ID!): Post
    removeCaption(postId: ID!, caption: String!): Post
  }

  type User {
    _id: ID!
    username: String!
    email: String
  }

  type Post {
    _id: ID
    username: String
    image: String
    captions: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;