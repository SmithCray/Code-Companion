const { User, model } = require("mongoose");

const userSchema = new Schema({
  // ID assigned in resolver(?)
  username: {
    type: String,
    required: true,
    unique: true,
  },
  github: {
    type: String,
    required: true,
    unique: true,
  },
  languages: {
    type: String,
    required: true,
  },
  experienceLevel: {
    // Make this a drop-down menu with years of experience: >1 -- 5+
    type: Number,
    required: true,
  },
  projects: {
    //Call Projects object here
  },
  skills: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
