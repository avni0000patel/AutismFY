const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
  }
  
  type Profile {
    _id: ID
    name: String
    captions: String
  }

  type Query {
    me: User
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProfile(name: String!): Profile
    addCaption(profileId: ID!, caption: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeCaption(profileId: ID!, caption: String!): Profile
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
