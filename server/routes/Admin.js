const router = require("express").Router();
const AdminData = require("../controllers/Admin");

router.get("/", AdminData);
module.exports = router;
