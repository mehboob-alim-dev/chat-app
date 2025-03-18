const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const chatRoutes = require("./routes/chatRoutes");
app.use("/api/chat", chatRoutes);

module.exports = app;
