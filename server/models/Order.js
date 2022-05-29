const { required } = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  OrderId: { type: String, required: true },
  OrderedBy: String,
  Items: { type: [], required: true },
  Quantity: { type: [], required: true },
  TotalCost: { type: Number, required: true },
  Status: { type: String, required: true },
  Paid: { type: Boolean, default: false },
  OrderType: { type: String, default: "EatHere" },
  OrderDate: { type: Date },
});
let Order;
try {
  Order = mongoose.model("Order");
} catch (error) {
  Order = mongoose.model("Order", OrderSchema);
}

const validate = (data) => {
  const schema = Joi.object({
    OrderId: Joi.string().required().label("Order Id"),
    OrderedBy: Joi.string().required().label("OrderedBy"),
    Items: Joi.array().items(Joi.string()).label("Items"),
    Quantity: Joi.array().items(Joi.number()).label("Quantity"),
    TotalCost: Joi.number().required().label("Total Cost"),
    Status: Joi.string().required().label("Status"),
    OrderType: Joi.string().label("Order Type"),
    Paid: Joi.boolean().label("Paid"),
  });
  return schema.validate(data);
};

module.exports = { Order, validate };
