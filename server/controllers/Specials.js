const { Specials, validate } = require("../models/Specials");

const AddSpecial = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const Special = await Specials.findOne({ SpecialItem: req.body.ItemId });
    if (Special)
      return res
        .status(409)
        .send({ message: "Item with given Id already exists!" });
    await new Specials(req.body).save();
    res.status(201).send({ message: "Item Added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const RemoveSpecial = async (req, res) => {
  try{
    const Special = await Specials.findOne({ SpecialItem: req.body.ItemId });
    if (!Special)
      return res
        .status(404)
        .send({ message: "Special with given Id doesnt  exists!" });
    Specials.findOneAndDelete(
      { SpecialItem: req.body.ItemId },
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
const GetSpecials = async (req, res) => {
  try {
    const specials = await Specials.find({});
    res.status(200).send(specials);
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { AddSpecial, RemoveSpecial, GetSpecials };
