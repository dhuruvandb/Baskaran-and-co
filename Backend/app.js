const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
require("dotenv").config();
const user = require("./router/user");
const admin = require("./router/admin");
const common = require("./router/commonRouter");
const connectDB = require("./config/db");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for the application",
    },
    servers: [
      {
        url: "http://localhost:5000/",
      },
    ],
  },
  apis: ["./app.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use routers
app.use(user);
app.use(admin);
app.use(common);

// Connect to database
connectDB();

module.exports = app;
