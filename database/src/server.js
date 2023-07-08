const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/", require("./routes"));

server.use((err, req, res, next) => {
  if (err.message === "Invalid model") {
    res.status(400).send("Not Found");
  } else {
    res.status(500).send(err.message);
  }
});

module.exports = server;
