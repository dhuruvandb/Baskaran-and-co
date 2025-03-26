const express = require("express");
const cors = require("cors");
const cartRoutes = require("./routes/cartRoutes");
const connectDB = require("./db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
// Use middlewares before routes
app.use(cors());
app.use(express.json()); // Body parser for JSON data

// Define routes after middleware
app.use(cartRoutes);

// Connect to the database
connectDB();

// Ensure the PORT is set in .env and fallback to 3000 if undefined

// Start the server
app.listen(5002, () => {
  console.log(`cart-service is running on port ${5002}`);
});
