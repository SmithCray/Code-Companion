const { gql } = require("apollo-server-express");

// These are all just examples of possible schemas for our app
// NOTE: A "!" after a type (value) means "This field cannot be null"
const typeDefs = gql`


${/* Establishes schemas for CRUD operations*/ ""}

${/* CRUD: "CREATE" (need all four for project) */ ""}

  type User {
    _id: ID!
    username: String!
${/* Convert this to a URL later? */ ""}
    github: String!
${/* Allows for multiple languages */ ""}
    languages: String!
${/* Set as a number (dropdown: Years: >1, 1, 2, 3, 4, 5+) */ ""}
    experienceLevel: Number!
${/* OPTIONAL: Add associated project(s) here? */ ""}
    projects: [Project]
    skills: String!
  }

  type Project {
    _id: ID!
    name: String!
${
  /* Future Ice Box - We can have things go in and auto-delete if they are past a certain age */ ""
}
    dateCreated: Date
${/* Defines languages/technologies as an array */ ""}
    languages: String!
    skills: String!
    description: String!
${/* Set user/profile for "creator" by ID */ ""}
   creator: User!
   github: String!
${
  /* Add dedicated communication channel (preferably slack but give other options, must put in something though. ) */ ""
}
    communication: String!
  }

  ${/* CHECK IF THESE THREE TYPES ARE NECESSARY */ ""}
  ${/* Auto-responses to the "UPDATE" and "DELETE" calls (below) */ ""}
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
      (Return anything else related to user account here?)
  }

${/* CRUD: "Retrieve/Return" */ ""}

${
  /* Search for a user based on any of the parameters identified above; find a project and return by ID */ ""
}
  type Query {
${
  /*Icebox? If we want to enable ALL users to be searched, include this query */ ""
}
    user: User
${
  /*Icebox? If we want to enable ONE user to be searched, include this query */ ""
}
    user(id: ID!): User
${/* Returns ALL projects */ ""}
    projects: [Project]!
${/* Use  project.languages and user.languages */ ""}
    project(languages): Project
    user(languages): User
${/* Returns projects based on their ID */ ""}
    projectID(id: ID!): Project
  }

${/* CRUD: "UPDATE" and "DELETE" */ ""}
${
  /* NOTE: The responses to updating and deleting from a specific set are the same to streamline code -- see below */ ""
}

  type Mutation {
${
  /* UPDATE/DELETE: Allows a user to add OR remove a project to their "Favorites" list */ ""
}
    addFavProject(projectID: ID!): ProjectListUpdateResponse!
    deleteFavProject(projectID: ID!): ProjectListUpdateResponse!
${
  /* UPDATE/DELETE: Allows a user to add OR remove a project to their "Example Projects" list */ ""
}
    addExampleProject(projectID: ID!): ProjectListUpdateResponse!
    deleteExampleProject(projectID: ID!): ProjectListUpdateResponse!
${
  /* ?? OPTIONAL: UPDATE/DELETE: Allows a creator to update OR delete a project from the DB -- REQUIRES AUTHORIZATION: CREATORS ONLY */ ""
}
    updateProject(projectID: ID!): UpdateProjectResponse!
    cancelProject(projectID: ID!): UpdateProjectResponse!
${
  /* ?? OPTIONAL: UPDATE/DELETE: Allows a creator to update OR delete their user profile from the DB -- REQUIRES AUTHORIZATION: CREATORS ONLY */ ""
}
    updateUser(user: ID!): UpdateUserResponse!
    deleteUser(user: ID!): UpdateUserResponse!
${
  /* ?? Find a mutation that allows us to match users to projects? (Based loosely on Mini-Project in MERN module (21) */ ""
}
    createProject(language1: String!, userLanguage: String!): Query
  }
`;

module.exports = typeDefs;
