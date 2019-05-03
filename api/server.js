const express = require("express")
const helmet = require("helmet")
const projectRouter = require("../projects/projectRoutes")

const server = express();

server.use(express.json())
server.use(helmet())

server.use("/api/projects",projectRouter)

module.exports = server;