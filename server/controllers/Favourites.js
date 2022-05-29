const { Client } = require("../models/Client");
const { FoodItem } = require("../models/FoodItem");
const GetFavourites = async (req, res) => {
  const User = await Client.findOne({ MobileNumber: req.body.MobileNumber });

  const Favs = await FoodItem.find({
    ItemId: {
      $in: User.Favourites,
    },
  });
  res.send(Favs);
};
module.exports = { GetFavourites };
