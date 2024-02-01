import { gql } from '@apollo/client';

export const GET_ME = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      savedBooks {
        [Book]
      }
    }
  }
`;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      savedBooks {
        [Book]
      }
    }
  }
`;

export const QUERY_BOOK = gql`
  query book($bookId: ID!) {
    book(bookId: $bookId) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`;

