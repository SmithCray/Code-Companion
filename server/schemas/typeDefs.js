const { gql } = require("apollo-server-express");

// These are all just examples of possible schemas for our app
// NOTE: A "!" after a type (value) means "This field cannot be null"
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    github: String!
    languages: String!
    experienceLevel: Int!
    projects: [Project]
    skills: String!
  }

  type Project {
    _id: ID!
    name: String!

    dateCreated: String

    languages: String!
    skills: String!
    description: String!

    creator: User!
    github: String!
    communication: String!
  }

  type ProjectListUpdateResponse {
    success: Boolean!
    message: String
    projectList: [Project]
  }

  type UpdateProjectResponse {
    success: Boolean!
    message: String
    projects: [Project]
  }

  type UpdateUserResponse {
    success: Boolean!
    message: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    projects: [Project]!
    projectLang(languages: String!): Project
    userLang(languages: String!): [User]
    projectID(id: ID!): Project
  }

  type Mutation {
    addFavProject(projectID: ID!): ProjectListUpdateResponse!
    deleteFavProject(projectID: ID!): ProjectListUpdateResponse!

    addExampleProject(projectID: ID!): ProjectListUpdateResponse!
    deleteExampleProject(projectID: ID!): ProjectListUpdateResponse!

    updateProject(projectID: ID!): UpdateProjectResponse!
    cancelProject(projectID: ID!): UpdateProjectResponse!
    updateUser(user: ID!): UpdateUserResponse!
    deleteUser(user: ID!): UpdateUserResponse!
  }
`;

module.exports = typeDefs;
