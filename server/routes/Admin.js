const router = require("express").Router();
const {
  AddFoodItem,
  DeleteFoodItem,
  GetFoodItems,
} = require("../controllers/FoodItems");
const {
  CreateEmployee,
  AdminLogin,
  TestAdmin,
} = require("../controllers/AdminData");
const { AddSpecial, RemoveSpecial } = require("../controllers/Specials");
const {
  AddIngredient,
  RemoveIngredient,
  GetIngredients,
} = require("../controllers/Inventory");

router.post("/Test/", TestAdmin);
router.get("/Test/", (req, res) => {});
router.post("/CreateEmployee", CreateEmployee);
router.post("/Login", AdminLogin);
router.post("/FoodItem", AddFoodItem);
router.get("/FoodItem", GetFoodItems);
router.delete("/FoodItem", DeleteFoodItem);
router.post("/Specials", AddSpecial);
router.delete("/Specials", RemoveSpecial);
router.post("/Inventory", AddIngredient);
router.delete("/Inventory", RemoveIngredient);
router.get("/Inventory", GetIngredients);

module.exports = router;
