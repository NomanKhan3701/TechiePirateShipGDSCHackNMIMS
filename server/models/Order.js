const { required } = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  OrderId: { type: String, required: true },
  OrderedBy: String,
  Items: { type: [{}], required: true },
  TotalCost: { type: Number, required: true },
  Status: { type: String, required: true }
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
    Items: Joi.array().items(Joi.object()).label("Items"),
    TotalCost: Joi.number().required().label("Total Cost"),
    Status: Joi.string().required().label("Status"),
  });
  return schema.validate(data);
};

module.exports = { Order, validate };
