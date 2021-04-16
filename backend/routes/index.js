const express = require("express");
const router = express.Router();
const path = require("path");

const user = require("./users");
const librarian = require("./librarian");

router.use("/user", user);
router.use("/librarian", librarian);





module.exports = router;