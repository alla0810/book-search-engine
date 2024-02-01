const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedBooks');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedBooks');
    },
    book: async (parent, { bookId }) => {
      return Book.findOne({ bookId: bookId });
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // saveBook: async (parent, {username, authors, description, title, BookId, image, link}) => {
    //   const book = await Book.create({ authors, description, BookId, image, link, title});

    //   const updatedUser = await User.findOneAndUpdate(
    //     { username: username },
    //     { $addToSet: { savedBooks: book } },
    //     {new: true, runValidators: true}
    //   );

    //   return updatedUser;
    // },
    saveBook: async (parent, { userId, authors, description, title, BoodId, image, link }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { savedBooks: { authors, description, BoodId, image, link, title } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeBook: async (parent, { userId, BookId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: { BoodId: BookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
