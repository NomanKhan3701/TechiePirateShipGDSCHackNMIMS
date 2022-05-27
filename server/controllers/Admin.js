const { FoodItem, validate } = require("../models/FoodItem");
const AdminData = (req, res) => {
  try {
    res.status(200).send("Successfull request to Admin");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const AddFoodItem = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const food = await FoodItem.findOne({ ItemId: req.body.ItemId });
    if (food)
      return res
        .status(409)
        .send({ message: "Item with given Id already exists!" });

    await new FoodItem(req.body).save();
    res.status(201).send({ message: "Item Added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const DeleteFoodItem = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    FoodItem.findOneAndDelete(
      { ItemId: req.body.ItemId },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send({ message: "Deleted Food Item : ", docs });
        }
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const GetFoodItems = async (req, res) => {
  try {
    const food = await FoodItem.find({});
    res.send(food)
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
module.exports = { AdminData, AddFoodItem, DeleteFoodItem, GetFoodItems };
