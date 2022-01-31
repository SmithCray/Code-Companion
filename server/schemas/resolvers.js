const { Project, User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    projects: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Project.find(params);
    },
  },
};

module.exports = resolvers;
