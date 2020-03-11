const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const validate = require('./routes/validate')

const app = express();

// Routes
const studentRoutes = require("./routes/students");

app.use(express.json());
app.use("/api/students", validate)
app.use("/api/students", studentRoutes);

module.exports = app;
