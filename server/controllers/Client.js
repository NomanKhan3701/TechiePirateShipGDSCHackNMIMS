const router = require("express").Router();
const { validate, Client } = require("../models/Client");
const Joi = require("joi");
const { FoodItem } = require("../models/FoodItem");
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
    const hashPassword = await bcrypt.hash(req.body.Password, salt);
    console.log(hashPassword);
    await new Client({ ...req.body, Password: hashPassword }).save();
    res.status(201).send({ message: "User Created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const Login = async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const client = await Client.findOne({
      MobileNumber: req.body.MobileNumber,
    });

    console.log(client);
    let validPassword;

    if (!client)
      return res
        .status(401)
        .send({ message: "Invalid Mobile Number or Password" });
    try {
      validPassword = await bcrypt.compare(req.body.password, client.Password);
    } catch (err) {
      console.log(err);
    }
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });
    const token = client.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged In Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
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

const UpdateFavourites = async (req, res) => {
  try {
    const User = await Client.findOne({ MobileNumber: req.body.MobileNumber });
    const food = await FoodItem.findOne({ ItemId: req.body.ItemId });

    if (!(User && food))
      res.status(401).send({ message: "Invalid MobileNumber or Food Id" });
    if (User.Favourites.includes(req.body.ItemId)) {
      Client.updateOne(
        { MobileNumber: req.body.MobileNumber },
        { $pull: { Favourites: req.body.ItemId } },
        function (err, raw) {
          if (err) res.send(err);
          res.send(raw);
        }
      );
    } else {
      Client.updateOne(
        { MobileNumber: req.body.MobileNumber },
        { $push: { Favourites: req.body.ItemId } },
        function (err, raw) {
          if (err) res.send(err);
          res.send(raw);
        }
      );
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const UpdateLikes = async (req, res) => {
  try {
    const User = await Client.findOne({ MobileNumber: req.body.MobileNumber });
    const food = await FoodItem.findOne({ ItemId: req.body.ItemId });

    if (!(User && food)) {
      res.status(401).send({ message: "Invalid MobileNumber or Food Id" });
    }

    if (User.LikedDishes.includes(req.body.ItemId)) {
      console.log("2heloo");
      Client.findOneAndUpdate(
        { MobileNumber: req.body.MobileNumber },
        { $pull: { LikedDishes: req.body.ItemId } },
        function (err, raw) {
          if (err) console.log(err);
          console.log(raw);
        }
      ).clone();
      food.Popularity -= 1;
      await FoodItem.findOneAndUpdate(
        { ItemId: food.ItemId },
        { Popularity: food.Popularity },
        function (err, raw) {
          if (err) console.log(err);
          console.log(raw);
        }
      ).clone();
    } else {
      console.log("1heloo");
      await Client.findOneAndUpdate(
        { MobileNumber: req.body.MobileNumber },
        { $push: { LikedDishes: req.body.ItemId } },
        function (err, raw) {
          if (err) console.log(err);
          console.log(raw);
        }
      ).clone();
      food.Popularity += 1;
      await FoodItem.findOneAndUpdate(
        { ItemId: food.ItemId },
        { Popularity: food.Popularity },
        function (err, raw) {
          if (err) console.log(err);
          console.log(raw);
        }
      ).clone();
    }
    res.send({ Message: "Edited Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
module.exports = { Signup, Login, UpdateFavourites, UpdateLikes };
