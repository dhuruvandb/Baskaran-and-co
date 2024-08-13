const express = require("express");

const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const user = require("./router/user");
const admin = require("./router/admin");
const common = require("./router/commonRouter");
const connectDB = require("./config/db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(user);
app.use(admin);
app.use(common);
app.use(express.json());
connectDB();

module.exports = app;
