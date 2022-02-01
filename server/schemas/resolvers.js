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
  Mutation: {
    //
    // user: req.oidc.user,
    //
    updateUser: async (
      parent,
      { projectName, languages, skills, description, github, communication },
      context
    ) => {
      if (!context.isAuthenticated) {
        throw Error("User is not authenticated");
      }
      const project = await Project.create({
        projectName,
        languages,
        skills,
        description,
        creator: context.user.username,
        github,
        communication,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { projects: project._id } },
        { new: true, runValidators: true }
      );
      return project;
    },
    cancelProject: async (parent, { projectId }, context) => {
      if (!context.isAuthenticated) {
        throw Error("User is not authenticated");
      }
      return Project.findOneAndDelete(
        { _id: projectId },
        {
          $pull: {
            projects: {
              _id: projectId,
            },
          },
        },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
