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
    updateUser: async (parent, args, context) => {
      if (!context.isAuthenticated) {
        throw Error("User is not authenticated");
      }
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            projects: {
              projectName,
              languages,
              skills,
              description,
              creator: context.user.username,
              github,
              communication,
            },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },


    cancelProject: async (parent, { userId, projectId }, context) => {
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
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
