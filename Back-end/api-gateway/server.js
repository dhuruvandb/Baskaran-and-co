const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const proxy = require("express-http-proxy");

app.use(cors());
app.use(express.json());

app.use("/cart", proxy("http://localhost:5002"));
app.use("/users", proxy("http://localhost:5003"));
app.use("/orders", proxy("http://localhost:5004"));
app.use("/wish-list", proxy("http://localhost:5005"));
app.use("/notification", proxy("http://localhost:5006"));
app.use("/payment", proxy("http://localhost:5007"));
app.use("/products", proxy("http://localhost:5001"));

app.listen(5000, () => {
  console.log("Api Gateway is running " + 5000);
});
