const express = require("express");
const helmet = require("helmet");


const AuthRouter = require("./auth/authroute");
const UserRouter = require("./users/userrouter");


const db = require("./data/dbconfg");


const server = express();


server.use(helmet());
server.use(express.json());


server.get("/", (req, res) => {
  res.send(`<h1>Hello World from WebAuth I Challenge!</h1>`);
});

server.use("/api/auth", AuthRouter);
server.use("/api/users", UserRouter);


module.exports = server;
