const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]    
    description: String!
    title: String!
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    book(bookId: ID!): Book
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth    
    addUser(userName: String!, email: String!, password: String!): Auth    
    saveBook(userId:ID!, authors: [String], description: String!, title: String!, BookId: String!, image: String): User
    removeBook(userId:ID!, BookId: String!): User
  }
`;

module.exports = typeDefs;
