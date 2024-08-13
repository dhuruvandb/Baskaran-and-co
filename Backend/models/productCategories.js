const { Schema, model } = require("mongoose");

const categories = Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = model("categories", categories);
