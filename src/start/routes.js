const express = require("express");
const { app } = require("./server");

// Routes
const tests = require("../routes/tests");

app.use(express.json());
app.use("/api/tests", tests);
