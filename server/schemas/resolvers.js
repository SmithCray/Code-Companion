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
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    createUser: async (
      parent,
      { username, github, languages, experienceLevel, skills },
      context
    ) => {
      if (!context.authenticated) {
        throw Error("User is not authenticated");
      }
      const userId = context.user.sub;
      const user = await User.create({
        userId,
        username,
        github,
        languages,
        experienceLevel,
        //projects,
        skills,
      });
      return user;
    },
    updateUser: async (
      parent,
      { projectName, languages, skills, description, github, communication },
      context
    ) => {
      if (!context.authenticated) {
        throw Error("User is not authenticated");
      }
      const user = await User.findOne({ userId: context.user.sub });
      if (!user) {
        throw Error("You have not yet created a user");
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

      await user.update(
        { $addToSet: { projects: project._id } },
        { new: true, runValidators: true }
      );
      return project;
    },
    cancelProject: async (parent, { projectName }, context) => {
      if (!context.authenticated) {
        throw Error("User is not authenticated");
      }
      await Project.findOneAndDelete(
        { projectName, creator: context.user.username },
        {
          $pull: {
            projects: {
              projectName,
            },
          },
        }
      );
      return { success: true, message: "got'em" };
    },
  },
};

module.exports = resolvers;
