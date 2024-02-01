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
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(username: String!): User
    user(username: String!): User
    book(bookId: ID!): Book
  }

  type Mutation {
    login(email: String!, password: String!): Auth    
    addUser(username: String!, email: String!, password: String!): Auth    
    SaveBook(userId:ID!, authors: [String], description: String!, title: String!, BookId: String!, image: String, link: String): User
    removeBook(userId:ID!, BookId: String!): User
  }
`;

module.exports = typeDefs;
