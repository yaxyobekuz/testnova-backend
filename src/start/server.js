const http = require("http");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
const server = http.createServer(app);

module.exports = { server, app };
