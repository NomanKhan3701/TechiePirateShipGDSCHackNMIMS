const { Admin, validate } = require("../models/Admin");
const generator = require("generate-password");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const Joi=require('joi')
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "varun.koranne@spit.ac.in",
    pass: "",
  },
});

const validateLogin = (data) => {
  const schema = Joi.object({
    AdminId: Joi.string().length(10).required().label("AdminId"),
    Password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

const TestAdmin = async (req, res) => {
  try {
    var mailOptions = {
      from: "varun.koranne@spit.ac.in",
      to: req.body.Email,
      subject: req.body.subject,
      text: req.body.txt,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send(error);
      } else {
        res.send("Email sent: " + info.response);
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const CreateEmployee = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const admin = await Admin.findOne({
      Aadhar: req.body.Aadhar,
    });
    if (admin)
      return res
        .status(409)
        .send({ message: "User with given Aadhar number already exists!" });
    const pass = generator.generate({ length: 8, strict: true });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(pass, salt);
    console.log(hashPassword);
    console.log(pass);
    const Id =
      req.body.FirstName.slice(0, 3) +
      req.body.Aadhaar.slice(0, 4) +
      req.body.LastName.slice(0, 3);
    await new Admin({
      ...req.body,
      AdminId: Id,
      Password: hashPassword,
    }).save();
    var mailOptions = {
      from: "varun.koranne@spit.ac.in",
      to: req.body.Email,
      subject: "Authentication Details",
      text:
        "Your Login Id and Password Details Are as Follows \n Login Id: " +
        Id +
        "\n Password: " +
        pass,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send(error);
      } else {
        res.status(201).send("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const AdminLogin = async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const admin = await Admin.findOne({ AdminId: req.body.AdminId });
    if (!admin)
      return res.status(401).send({ message: "Invalid AdminId or Password" });

    const validPassword = await bcrypt.compare(
      req.body.Password,
      admin.Password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid AdminId or Password" });
    const token = admin.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged In Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { CreateEmployee, AdminLogin, TestAdmin };
