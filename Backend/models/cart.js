const { Schema, model } = require("mongoose");

module.exports = model("cart", new Schema({}, { strict: false }));
