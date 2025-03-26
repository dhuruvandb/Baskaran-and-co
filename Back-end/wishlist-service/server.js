const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./db");

// connectDB();
app.listen(5005, () => {
  console.log("Server is running on port ", 5005);
});
