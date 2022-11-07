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

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($name: String!) {
    addPost(name: $name) {
      _id
      name
      image
      captions
    }
  }
`;

export const ADD_CAPTION = gql`
  mutation addCaption($postId: ID!, $caption: String!) {
    addCaption(postId: $postId, caption: $caption) {
      _id
      name
      image
      captions
    }
  }
`;
