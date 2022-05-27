const router = require("express").Router();
const { Signup, Login } = require("../controllers/Client");

router.post("/SignUp", Signup);
router.post("/Login", Login);

module.exports = router;
