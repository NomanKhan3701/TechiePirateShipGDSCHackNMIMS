const router = require("express").Router();
const {
  Signup,
  Login,
  UpdateFavourites,
  UpdateLikes,
} = require("../controllers/Client");
const {  UpdateFoodItems,GetFoodItems } = require("../controllers/FoodItems");
const {
  AddOrder,
  GetOrders,
  SetOrder,
  TerminateOrder,
} = require("../controllers/Order");
const { GetSpecials } = require("../controllers/Specials");

router.get("/", (req, res) => {
  res.send("client part");
});
router.patch("/FoodItem", UpdateFoodItems);
router.get("/FoodItem",GetFoodItems)
// router.get("/FoodItem/Popularity", GetFoodItemsPopular);
// router.get("/FoodItem/All",GetFoodItemsAll);
router.post("/SignUp", Signup);
router.post("/Login", Login);
router.patch("/UpdateFavourites", UpdateFavourites);
router.patch("/UpdateLikedDishes", UpdateLikes);
router.post("/Order", AddOrder);
router.get("/Order", GetOrders);
router.patch("/Order", SetOrder);
router.patch("/Order/Terminate", TerminateOrder);
router.get("/Specials", GetSpecials);

module.exports = router;
