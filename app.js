const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

// let validatePost = require("../helpers/validititon");

// Routes
const studentRoutes = require("./routes/students");

app.use(express.json());

app.use("/api/students", studentRoutes);

module.exports = app;
