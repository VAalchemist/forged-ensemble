const { AuthenticationError } = require('apollo-server-express');
const { User, Files } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async () => {
      return User.find();
    },

    singleUser: async (parent, args) => {
      return User.findById(args._id)
    },
    getFiles: async () => {
      return Files.find();
    },
    getUserFiles: async(parent, args) => {
      console.log(args.userId);
      return Files.find({userId: args.userId})
    }
  },



  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addPic: async (parent, args) => {
      await User.findByIdAndUpdate(args._id, { profile_pic: args.profile_pic })
    },

    addFile: async (parent, args) => {
      await Files.create(args);
    }


  }
};

module.exports = resolvers;
