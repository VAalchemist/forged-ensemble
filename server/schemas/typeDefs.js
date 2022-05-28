const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    profile_pic: String
  }
  type Files {
    _id: ID
    fileName: String
    url: String
    userId: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]
  }

  type Query {
    singleUser(_id: ID!): User
  }
  type Query {
    getFiles: [Files]
  }
  type Query {
  getUserFiles(userId: ID!): [Files]
}

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addPic(profile_pic: String!,_id: String!): Boolean
    addFile(fileName: String!, url: String!, userId: String!): Boolean
  }

`;

module.exports = typeDefs;
