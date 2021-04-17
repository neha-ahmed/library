const express = require("express");
const Book = require("../controllers/books");

const router = express.Router();

//@POST
//@creates new book entry
router.post("/addtodb", Book.store);

//@GET
//@fetches all books
router.get("/", Book.list);

//@GET
//@fetches details for 1 book
router.get("/details/:id", Book.details);

module.exports = router;