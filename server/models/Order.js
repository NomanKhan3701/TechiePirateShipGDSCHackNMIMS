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
<<<<<<< HEAD
  Paid: { type: Boolean, default: false },
  OrderType: { type: String, default: "EatHere" },
  OrderDate: { type: Date },
=======
  Paid:{type:Boolean,default:false},
  OrderType:{type:String,default:"EatHere"},
  OrderDate:{type:Date}
>>>>>>> 7c61dcf18526971e88f232db05de759d0e3b68fb
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
<<<<<<< HEAD
    Quantity: Joi.array().items(Joi.number()).label("Quantity"),
    TotalCost: Joi.number().required().label("Total Cost"),
    Status: Joi.string().required().label("Status"),
    OrderType: Joi.string().label("Order Type"),
    Paid: Joi.boolean().label("Paid"),
=======
    Quantity:Joi.array().items(Joi.number()).label("Quantity"),
    TotalCost: Joi.number().required().label("Total Cost"),
    Status: Joi.string().required().label("Status"),
    OrderType:Joi.string().label("Order Type"),
    Paid:Joi.boolean().label("Paid")
>>>>>>> 7c61dcf18526971e88f232db05de759d0e3b68fb
  });
  return schema.validate(data);
};

module.exports = { Order, validate };
