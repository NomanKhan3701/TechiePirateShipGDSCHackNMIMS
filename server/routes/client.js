const router = require("express").Router();
const { Signup, Login } = require("../controllers/Client");
const { GetFoodItems, UpdateFoodItems } = require("../controllers/FoodItems");
const { AddOrder,GetOrders,SetOrder ,TerminateOrder} = require("../controllers/Order");
const {GetSpecials}=require("../controllers/Specials")
router.get("/", (req, res) => {
  res.send("client part");
});
router.patch("/FoodItem", UpdateFoodItems);
router.get("/FoodItem", GetFoodItems);
router.post("/SignUp", Signup);
router.post("/Login", Login);
router.post("/Order",AddOrder);
router.get("/Order",GetOrders);
router.patch("/Order",SetOrder);
router.patch("/Order/Terminate",TerminateOrder);
router.get("/Specials",GetSpecials)




module.exports = router;
