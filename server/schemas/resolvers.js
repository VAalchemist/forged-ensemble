const { AuthenticationError } = require('apollo-server-express');
<<<<<<< HEAD
const { User, Beats} = require('../models');
=======
const { User, Files } = require('../models');
>>>>>>> b14ccbe14831b78f066668dd0275ccec3c2eee6a
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
<<<<<<< HEAD

    beat: async () => {
      return Beats.find()
    },

    singleBeat: async (parent, args) => {
      return Beats.findById(args._id)
=======
    getFiles: async () => {
      return Files.find();
    },
    getUserFiles: async(parent, args) => {
      console.log(args.userId);
      return Files.find({userId: args.userId})
>>>>>>> b14ccbe14831b78f066668dd0275ccec3c2eee6a
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
<<<<<<< HEAD
      await User.findByIdAndUpdate(args._id, {profile_pic: args.profile_pic})
    },

    addBeat: async (parent, args) => {
      const beat = await Beats.create(args);

      return true;
    },

    removeBeat: async (parent, args) => {
      const beat = await Beats.deleteOne({ _id: args._id })
      
      console.log(beat);
      return true;

    }
=======
      await User.findByIdAndUpdate(args._id, { profile_pic: args.profile_pic })
    },

    addFile: async (parent, args) => {
      await Files.create(args);
    }


>>>>>>> b14ccbe14831b78f066668dd0275ccec3c2eee6a
  }
};

module.exports = resolvers;
