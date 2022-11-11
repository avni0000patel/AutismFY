const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    posts: [Post]!
    todos: [Todo]!
  }

  type Post {
    _id: ID
    image: String!
    postText: String!
    postAuthor: String!
    createdAt: String!
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String!
    commentAuthor: String!
    createdAt: String!
  }

  type Todo {
    _id: ID
    name: String!
    todoText: String!
    status: Boolean
    postAuthor: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    todos(username: String): [Todo]
    todo(todoId: ID!): Todo
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!, image: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addTodo(todoText: String!, name: String!): Todo
    removeTodo(todoId: ID!): Todo
  }
`;

module.exports = typeDefs;
