import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String! 
    $email: String! 
    $password: String!
    ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
      ) {
      token
      user {
        _id
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook(
    $userId: ID!
    $authors: [String]
    $description: String
    $title: String!
    $bookId: String!
    $image: String
  ) {
    saveBook(
      userId: $userId
      authors: $authors
      description: $description
      title: $title
      bookId: $bookId
      image: $image
    ) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $userId: ID!,
    $bookId: String!
  ) {
    removeBook(
      userId: $userId,
      bookId: $bookId
    ) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
      }
    }
  }
`;
