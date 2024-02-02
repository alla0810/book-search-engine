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
    $userName: String!, 
    $email: String!, 
    $password: String!
    ) {
    addUser(
      userName: $userName, 
      email: $email, 
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
    $userId: ID!,
    $authors: [String],
    $description: String!,
    $title: String!,
    $BookId: String!,
    $image: String,
  ) {
    saveBook(
      userId: $userId,
      authors: $authors,
      description: $description,
      title: $title,
      BookId: $BookId,
      image: $image
    ) {
      user {
        _id
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $userId: ID!,
    $BookId: String!
  ) {
    removeBook(
      userId: $userId,
      BookId: $BookId
    ) {
      user {
        _id
      }
    }
  }
`;