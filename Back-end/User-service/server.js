const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./db");
const register = require("./routes/registerRoutes");
const login = require("./routes/authRoutes");
const cors = require("cors");
connectDB();
app.use(cors());
app.use(express.json());

app.use(register);
app.use(login);

app.listen(5003, () => {
  console.log("auth-service is running on port ", 5003);
});
