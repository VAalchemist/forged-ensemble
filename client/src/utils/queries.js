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