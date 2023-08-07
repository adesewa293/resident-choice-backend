const mongoose = require("mongoose");
const { Schema } = mongoose;

const menuSchema = new Schema({
  week: String,
  day: String,
  meal_time: String,
  imageUrl: [String],
  main_1: String,
  main_2: String,
  side_1: String,
  side_2: String,
  desert_1: String,
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
