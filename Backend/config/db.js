const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected : ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};


module.exports = connectDB;
