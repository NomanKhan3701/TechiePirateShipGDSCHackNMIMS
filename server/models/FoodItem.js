const Joi = require("joi");
const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
  ItemId: { type: String, required: true },
  ItemName: { type: String, required: true },
  Price: { type: Number, required: true },
  Ingredients: [String],
  Availability: { type: Boolean, required: true },
  Description: String,
  Image: String,
  Popularity: Number,
  BestTimeToEat:[String],
  Category:String,
  Cuisine: [String],
  Reviews: [String]
});

const validate = (data) => {
  const schema = Joi.object({
    ItemId: Joi.string().required().label("Item Id"),
    ItemName: Joi.string().required().label("Item Name"),
    Price: Joi.number().required().label("Price"),
    Ingredients: Joi.array().items(Joi.string()).label("Ingredients"),
    Availability: Joi.boolean().required().label("Availability"),
    Description: Joi.string().label("Description"),
    Image: Joi.string().label("Image"),
    Popularity: Joi.number().label("Popularity"),
    BestTimeToEat: Joi.array().items(Joi.string()).label("Ingredients"),
    Category: Joi.string().label("Category"),
    Cuisine: Joi.array().items(Joi.string()).label("Cuisine"),
    Reviews: Joi.array().items(Joi.string()).label("Reviews"),
  });
  return schema.validate(data);
};

const FoodItem = mongoose.model("FoodItem", FoodItemSchema);

module.exports = { FoodItem, validate };
