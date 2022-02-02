import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query users($id: ID!) {
    users(id: $id) {
      _id
      username
      github
      languages
      experienceLevel
      projects
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      github
      languages
      experienceLevel
      projects
      skills
    }
  }
`;

export const QUERY_PROJECT = gql`
  query projects {
    projects {
      _id
      projectName
      dateCreated
      languages
      skills
      description
      creator
      github
      communication
    }
  }
`;
