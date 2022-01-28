const { Project, model } = require("mongoose");

const projectSchema = new Schema({
  // ID assigned in resolver(?)
  name: {
    type: String,
    required: true,
  },
  dateCreated: Date,
  languages: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    // Call user based on ID and add username?
  },
  github: {
    type: String,
    required: true,
  },
  communication: {
    type: String,
    required: true,
  },
});

const Project = model("Project", projectSchema);

module.exports = Project;
