const { gql } = require("apollo-server-express");

// These are all just examples of possible schemas for our app
// NOTE: A "!" after a type (value) means "This field cannot be null"
const typeDefs = gql`


${ /* Establishes schemas for CRUD operations*/ ''}

${ /* CRUD: "CREATE" (need all four for project) */ ''}


${ /* Call this User or Profile? */ ''}
  type ? User {
    _id: ID!
    name: String!
${ /* Convert this to a URL later? */ ''}
    github: String!
${ /* Allows for multiple languages */ ''}
    languages: [Language]
    # Comment
${ /* OPTIONAL: Set as a STRING or an INT? Dropdown? (Years: >1, 1, 2, 3, 4, 5+)s */ ''}
    experienceLevel: String _or_ Int
${ /* OPTIONAL: Add associated project(s) here? */ ''}
    projects: [Project]
    skills: String!
  }

  type Project {
    _id: ID!
    name: String!
${ /* Future Ice Box - We can have things go in and auto-delete if they are past a certain age */ ''}
    dateCreated: String!
${ /* Defines languages/technologies as an array */ ''}
    languages: [Language]
    skills: String!
    description: String!
${ /* Set user/profile for "creator" and "github" by ID? */ ''}
   creator: User(.id? -- name)!
   github: User(.id? -- github)!
${ /* Add dedicated communication channel (preferably slack but give other options, must put in something though. ) */ ''}
    communication: String!
  }

  type Language {
      _id: ID!
      name: String!
  }

  ${ /* Auto-responses to the "UPDATE" and "DELETE" calls (below) */ ''}
  type ProjectListUpdateResponse {
      success: Boolean!
      message: String
      projectList: [Projects]
  }

  type UpdateProjectResponse {
      success: Boolean!
      message: String
      projects: [Projects]
  }

  type UpdateUserResponse {
      success: Boolean!
      message: String
      (Return anything else related to user account here?)
  }

${ /* CRUD: "Retrieve/Return" */ ''}

${/* Search for a user based on any of the parameters identified above; find a project and return by ID */ ''}
  type Query {
${ /*Icebox? If we want to enable ALL users to be searched, include this query */}
    user: User
${ /*Icebox? If we want to enable ONE user to be searched, include this query */}
    user(id: ID!): User
${ /* Returns ALL projects */ ''}
    projects: [Project]!
${ /* Returns projects based on specified language -- this might need to be revised as Language is an array */ ''}
    projectLang(languages: Language!): Project
${ /* Returns projects based on their ID */ ''}
    projectID(id: ID!): Project
  }

${ /* CRUD: "UPDATE" and "DELETE" */ ''}
${ /* NOTE: The responses to updating and deleting from a specific set are the same to streamline code -- see below */ ''}

  type Mutation {
${ /* UPDATE/DELETE: Allows a user to add OR remove a project to their "Favorites" list */ ''}
    addFavProject(projectID: ID!): ProjectListUpdateResponse!
    deleteFavProject(projectID: ID!): ProjectListUpdateResponse!
${ /* UPDATE/DELETE: Allows a user to add OR remove a project to their "Example Projects" list */ ''}
    addExampleProject(projectID: ID!): ProjectListUpdateResponse!
    deleteExampleProject(projectID: ID!): ProjectListUpdateResponse!
${ /* ?? OPTIONAL: UPDATE/DELETE: Allows a creator to update OR delete a project from the DB -- REQUIRES AUTHORIZATION: CREATORS ONLY */ ''}
    updateProject(projectID: ID!): UpdateProjectResponse!
    cancelProject(projectID: ID!): UpdateProjectResponse!
${ /* ?? OPTIONAL: UPDATE/DELETE: Allows a creator to update OR delete their user profile from the DB -- REQUIRES AUTHORIZATION: CREATORS ONLY */ ''}
    updateUser(user: ID!): UpdateUserResponse!
    deleteUser(user: ID!): UpdateUserResponse!
${ /* ?? Find a mutation that allows us to match users to projects? (Based loosely on Mini-Project in MERN module (21) */ ''}
    createProject(language1: String!, userLanguage: String!): Query
  }
`;

module.exports = typeDefs;
