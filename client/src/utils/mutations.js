import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $github: String!
    $languages: String!
    $experienceLevel: Int!
    $skills: String!
  ) {
    createUser(
      username: $username
      github: $github
      languages: $languages
      experienceLevel: $experienceLevel
      skills: $skills
    ) {
      username
      github
      languages
      experienceLevel
      skills
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $projectName: String!
    $languages: String!
    $skills: String!
    $description: String!
    $github: String!
    $communication: String!
  ) {
    updateUser(
      projectName: $projectName
      languages: $languages
      skills: $skills
      description: $description
      github: $github
      communication: $communication
    ) {
      projectName
      languages
      skills
      description
      creator
      github
      communication
    }
  }
  # mutation cancelProject(
  #   $projectName: String!
  # ) {
  #   updateUser(
  #     projectName: $projectName
  #   ) {
  #     projectName
  #   }
`;
