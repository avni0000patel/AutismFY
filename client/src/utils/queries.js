import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      name
      avatar
      image
      captions
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query singlePost($postId: ID!) {
    post(postId: $postId) {
      _id
      name
      avatar
      image
      captions
    }
  }
`;
