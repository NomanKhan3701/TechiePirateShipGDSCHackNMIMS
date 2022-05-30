const { FoodItem, validate } = require("../models/FoodItem");
const { Client } = require("../models/Client");

const AddFoodItem = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const food = await FoodItem.findOne({ ItemId: req.body.ItemId });
    if (food) {
      return res
        .status(409)
        .send({ message: "Item with given Id already exists!" });
    }

    await new FoodItem(req.body).save();
    res.status(201).send({ message: "Item Added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const DeleteFoodItem = async (req, res) => {
  try {
    item = await FoodItem.findOne({ ItemId: req.body.ItemId });
    if (item) {
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
      Client.updateOne(
        {},
        { $pull: { Favourites: req.body.ItemId } },
        function (err, raw) {
          if (err) res.send(err);
          res.send(raw);
        }
      );
    } else {
      res.status(404).send({ message: "Item Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const GetFoodItems = async (req, res) => {
  const SortBy = req.query.SortBy;
  try {
    if (SortBy === "Custom") {
      const items = await FoodItem.find({
        ItemId: {
          $in: req.query.Items,
        },
      });
      res.send(items);
    }
    if (SortBy === "None") {
      const food = await FoodItem.find({});
      res.send(food);
    } else if (SortBy === "Popularity") {
      const food = await FoodItem.find({}).sort({ Popularity: -1 });
      res.send(food);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const UpdateFoodItems = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { AddFoodItem, DeleteFoodItem, GetFoodItems, UpdateFoodItems };
