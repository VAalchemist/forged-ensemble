const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    profile_pic: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Beats {
  _id: ID
  beat: String,
  startTime: Int,
  userId: String
}

  type Query {
    user: [User]
  }

  type Query {
    singleUser(_id: ID!): User
  }

type Query {
  beat: [Beats]
}


type Query {
  singleBeat(_id: ID!): Beats
}

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addPic(profile_pic: String!,_id: String!): Boolean
    addBeat(beat: String!, startTime: Int!, userId: String!): Boolean
    removeBeat(beat: String!, startTime: Int!, userId: String!): Boolean
  }

`;

module.exports = typeDefs;
