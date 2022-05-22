const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async () => {
        return User.find()
    },


  },

  Mutation: {
    // addUser: async (parent, args) => {
    //   const user = await User.create(args);
    //   const token = signToken(user);

    //   return { token, user };
    // },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // const token = signToken(user);

      // return { token, user };
      return {user};
    }

    
  }
};

module.exports = resolvers;
