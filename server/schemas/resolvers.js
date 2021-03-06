const { AuthenticationError } = require('apollo-server-express');
const { User, Beats, Files} = require('../models');
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

    beat: async () => {
      return Beats.find()
    },

    singleBeat: async (parent, args) => {
      return Beats.findById(args._id)
    },
    
    getFiles: async () => {
      return Files.find();
    },

    getUserFiles: async (parent, args) => {
      return Files.find({ userId: args.userId })
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

    addBeat: async (parent, args) => {
      const beat = await Beats.create(args);

      return true;
    },

    removeBeat: async (parent, args) => {
      const beat = await Beats.deleteOne({ _id: args._id })
      
      console.log(beat);
      return true;

    },

    addFile: async (parent, args) => {
      await Files.create(args);
    }
  }
};

module.exports = resolvers;
