const db = require("../config/connection");
const { User, Project } = require("../models");

const userData = require("./userSeeds.json");
const projectData = require("./projectSeeds.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Project.deleteMany({});

  const users = await User.insertMany(userData);
  const projects = await Project.insertMany(projectData);

  console.log("Users & Projects seeded!");
  process.exit(0);
});
