import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query users {
    users {
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
      name
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
