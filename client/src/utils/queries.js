import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        avatar
        image
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      avatar
      image
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      avatar
      image
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        avatar
        image
        postText
        postAuthor
        createdAt
      }
    }
  }
`;
