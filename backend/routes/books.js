const express = require("express");
const Book = require("../controllers/books");

const router = express.Router();

//@POST
//@creates new book entry
router.post("/addtodb", Book.store);

//@POST
//@creates new book entry
router.get("/", Book.list);

module.exports = router;