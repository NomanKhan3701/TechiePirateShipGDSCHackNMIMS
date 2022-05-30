const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const clientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  MobileNumber: { type: String, required: true },
  Password: { type: String, required: true },
  prevOrders:[String],
  Favourites:[String],
  LikedDishes:[String],
});

clientSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};
const Client = mongoose.model("client", clientSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    MobileNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .label("Mobile Number"),
    Password: passwordComplexity().required().label("Password"),
    prevOrders:Joi.array().items(Joi.string()).label("Prev Orders"),
    Favourites:Joi.array().items(Joi.string()).label("Favourites"),
    LikedDishes:Joi.array().items(Joi.string()).label("LikedDishes"),

  });
  return schema.validate(data);
};

module.exports = { Client, validate };
