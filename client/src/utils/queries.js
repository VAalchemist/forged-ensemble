import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query getUser($_id: ID!){
        singleUser(_id: $_id){
            _id
            firstName
            lastName
            email
            profile_pic
        }

  }
`;

export const QUERY_USER_Files = gql`
    query getUserFiles($userId: ID!){
        getUserFiles(userId: $userId){
            _id
            fileName
            url
            userId
            artist
        }

  }
`;