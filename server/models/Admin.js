const mongoose = require("mongoose");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");
const jwt = require("jsonwebtoken");


const AdminSchema = new mongoose.Schema({
  isSuperUser: { type:Boolean, required: true },
  AdminId:{type:String,required:true},
  FirstName: { type:String, required: true },
  LastName: {type: String, required: true },
  Aadhaar: {type:String, required: true, unique: true },
  MobileNumber: { type:String, required: true },
  ProfilePic: String,
  ResidentialAddress: String,
  Email: String,
  Password:{type:String,required:true}
});
AdminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};
const Admin = mongoose.model("admin", AdminSchema);

const validate = (data) => {
  const schema = Joi.object({
    isSuperUser: Joi.required().label("SuperUser"),
    AdminId:Joi.string().label("Admin Id"),
    FirstName: Joi.string().required().label("FirstName"),
    LastName: Joi.string().required().label("LastName"),
    Aadhaar: Joi.string().length(12).required().label("Aadhar"),
    MobileNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .label("Mobile Number"),
    ProfilePic: Joi.string().label("ProfilePic"),
    ResidentialAddress: Joi.string().label("Address"),
    Email: Joi.string().email().required().label("Email"),
    Password: passwordComplexity().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { Admin, validate };
