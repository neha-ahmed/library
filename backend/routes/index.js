const express = require("express");
const router = express.Router();
const path = require("path");

const user = require("./users");
const librarian = require("./librarian");
const book = require("./books");
const borrowDetails = require("./borrowDetails")

router.use("/user", user);
router.use("/librarian", librarian);
router.use("/book", book);
router.use("/borrowDetails", borrowDetails );





module.exports = router;