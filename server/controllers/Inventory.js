const { Inventory, validate } = require("../models/Inventory");

const AddIngredient = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const Item = await Inventory.findOne({ ItemId: req.body.ItemId });
    if (Item)
      return res
        .status(409)
        .send({ message: "Item with given Id already exists!" });

    await new Inventory(req.body).save();
    res.status(201).send({ message: "Item Added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const RemoveIngredient = async (req, res) => {
  try {
    item = await Inventory.findOne({ ItemId: req.body.ItemId });
    if (item)
      Inventory.findOneAndDelete(
        { ItemId: req.body.ItemId },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            res.status(200).send({ message: "Deleted Food Item : ", docs });
          }
        }
      );
    else {
      res.status(404).send({ message: "Item Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const GetIngredients = async (req, res) => {
  try {
    const Ingredients = await Inventory.find({});
    res.send(Ingredients);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const SetIngredients=async(req,res)=>{

}
module.exports = { AddIngredient, RemoveIngredient, GetIngredients };
