const mongoose = require("mongoose");

const Joi = require("joi");

const SpecialsSchema = new mongoose.Schema({
  SpecialItem: { type: String, required: true },
});
const validate = (data) => {
  const schema = Joi.object({
    SpecialItem: Joi.string().required().label("Specials"),
  });
  return schema.validate(data);
};

const Specials = mongoose.model("Specials", SpecialsSchema);

module.exports = { Specials, validate };
