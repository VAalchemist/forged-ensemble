import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADDPIC = gql`
  mutation addPic($profile_pic: String!, $_id: String!) {
    addPic(profile_pic: $profile_pic, _id: $_id) 
  }
`;

export const ADDFILE = gql`
  mutation addFile($fileName: String!, $url: String!, $userId: String!) {
    addFile(fileName: $fileName, url: $url, userId: $userId) 
  }
`;

