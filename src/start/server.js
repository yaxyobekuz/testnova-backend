const http = require("http");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PUT"],
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://testnovauz.netlify.app",
    ],
  })
);

const server = http.createServer(app);

module.exports = server;
