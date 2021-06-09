const mongoose = require("mongoose");

//Contract of the data
const pizzaSchema = new mongoose.Schema({
  crust: String,
  cheese: String,
  sauce: String,
  toppings: [String]
});
// Convert Schema a Model with CRUD Operators
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = {
  model: Pizza,
  schema: pizzaSchema
};
