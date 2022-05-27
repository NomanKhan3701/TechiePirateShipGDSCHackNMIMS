const router = require("express").Router();
const { Signup, Login } = require("../controllers/Client");
const { GetFoodItems } = require("../controllers/FoodItems");

router.get("/", (req, res) => {
  res.send("client part");
});
router.get("/FoodItem", GetFoodItems);
router.post("/SignUp", Signup);
router.post("/Login", Login);

module.exports = router;
