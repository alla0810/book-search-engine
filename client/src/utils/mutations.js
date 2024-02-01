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

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $userId: ID!
    $authors: [String]
    $description: String!
    $title: String!
    $BookId: String!
    $image: String
    $link: String
  ) {
    saveBook(
      userId: $userId
      authors: $authors
      description: $description
      title: $title
      BookId: $BookId
      image: $image
      link: $link
    ) {
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $userId: ID!
    $BookId: String!
  ) {
    removeBook(
      userId: $userId
      BookId: $BookId
    ) {
      user {
        _id
        username
      }
    }
  }
`;
