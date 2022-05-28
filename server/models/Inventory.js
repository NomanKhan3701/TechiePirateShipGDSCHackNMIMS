const mongoose = require("mongoose");
const Joi = require("joi");


const InventorySchema = new mongoose.Schema({
    ItemId:{type:String,required:true},
    ItemName:{type:String,required:true},
    Quantity:{type:Number,required:true},
    FoodItem:{type:[String]}
});
const Inventory = mongoose.model("Inventory", InventorySchema);

const validate = (data) => {
  const schema = Joi.object({
    ItemId: Joi.string().required().label("Item Id"),
    ItemName: Joi.string().required().label("Item name"),
    Quantity: Joi.number().positive().greater(0).required().label("Quantity"),
    FoodItem: Joi.array().items(Joi.string()).label("FoodItem")
  });
  return schema.validate(data);
};

module.exports = { Inventory, validate };
