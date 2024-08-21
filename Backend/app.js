const express = require("express");

const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const user = require("./router/user");
const admin = require("./router/admin");
const common = require("./router/commonRouter");
const connectDB = require("./config/db");
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(user);
app.use(admin);
app.use(common);
app.use(express.json());
connectDB();

module.exports = app;
