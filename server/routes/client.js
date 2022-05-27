const router = require("express").Router();
const { Signup, Login } = require("../controllers/Client");

router.get("/", (req, res) => {
  res.send("client part");
});
router.post("/SignUp", Signup);
router.post("/Login", Login);

module.exports = router;
