// Breakpoints refer to auth0 code

const express = require("express");
const { auth } = require("express-openid-connect");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
//const { authMiddleware } = require("../client/src/components/Auth.js");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(auth());
server.applyMiddleware({ app });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.send(`Hello, ${req.oidc.user.name}`);
});
app.set("trust proxy", true);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`Test Auth0 at http://localhost:3001/login`);
  });
});
