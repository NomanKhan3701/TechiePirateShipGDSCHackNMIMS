const router = require("express").Router();
const { validate, Client } = require("../models/Client");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const Signup = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const client = await Client.findOne({
      MobileNumber: req.body.MobileNumber,
    });
    if (client)
      return res
        .status(409)
        .send({ message: "User with given mobile number already exists!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log(hashPassword);
    await new Client({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User Created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const Login = async (req, res) => {
  console.log(1234);
  try {
    const { error } = validateLogin(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const client = await Client.findOne({ MobileNumber: req.body.MobileNumber });
    if (!client)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      client.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });
    const token = client.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged In Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const validateLogin = (data) => {
  const schema = Joi.object({
    MobileNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .label("MobileNumber"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { Signup, Login };
