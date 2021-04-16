const express = require("express");
const User = require("../controllers/users");

const router = express.Router();


//@POST
//@creates new user
router.post("/addtodb", User.store);

module.exports = router;