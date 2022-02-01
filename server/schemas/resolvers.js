const { Project, User } = require("../models");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (!context.isAuthenticated) {
        throw Error("User is not authenticated");
      }
      return User.find({});
    },
    projects: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Project.find(params);
    },
  },
  Mutation: {
    updateUser: async (parent, args) => {},
  },
};

module.exports = resolvers;
