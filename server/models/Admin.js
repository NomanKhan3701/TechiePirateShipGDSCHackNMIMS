const mongoose = require("mongoose");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const AdminSchema = new mongoose.Schema({
  isSuperUser: Boolean, required: true ,
  ID: String, required: true, unique: true ,
  Password: String, required: true ,
});
const Admin = mongoose.model("admin", AdminSchema);


const validate = (data) => {
  const schema = Joi.object({
    isSuperUser:Joi.required().label("Super User"),
    id: Joi.string().required().label("Last Name"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};


module.exports = { Admin, validate };