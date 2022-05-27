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

router.post("/Test/",TestAdmin)
router.get("/Test/",(req,res)=>{

});
router.post("/CreateEmployee", CreateEmployee);
router.post("/Login", AdminLogin);
router.post("/FoodItem", AddFoodItem);
router.get("/FoodItem", GetFoodItems);
router.delete("/FoodItem", DeleteFoodItem);

module.exports = router;
