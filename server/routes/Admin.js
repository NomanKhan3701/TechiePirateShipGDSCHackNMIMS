const router = require("express").Router();
const {
  AdminData,
  AddFoodItem,
  DeleteFoodItem,
  GetFoodItems,
} = require("../controllers/Admin");
const { FoodItem } = require("../models/FoodItem");

router.get("/", AdminData);
router.post("/FoodItem", AddFoodItem);
router.get("/FoodItem", GetFoodItems);
router.delete("/FoodItem", DeleteFoodItem);

module.exports = router;
