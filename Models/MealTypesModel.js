// get schema instance
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema
const MealTypesSchema = new Schema({
  name: { type: String },
  content: { type: String },
  image: { type: String },
  meal_type: { type: Number },
});
// create model
const MealTypesModel = mongoose.model("mealtype", MealTypesSchema, "mealtypes");

//export model
module.exports = MealTypesModel;
