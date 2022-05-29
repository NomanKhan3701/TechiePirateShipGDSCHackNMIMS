const mongoose = require("mongoose");

const Joi = require("joi");

const SpecialsSchema = new mongoose.Schema({
  SpecialItem:  String,
});
const validate = (data) => {
  const schema = Joi.object({
    SpecialItem: Joi.string().label("Specials"),
  });
  return schema.validate(data);
};

const Specials = mongoose.model("Specials", SpecialsSchema);

module.exports = { Specials, validate };
