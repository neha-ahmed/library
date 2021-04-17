const express = require("express");
const BorrowDetails = require("../controllers/borrowDetails");

const router = express.Router();

//@POST
//@creates new book entry
router.post("/addtodb", BorrowDetails.store);

//@Get
//@fetches borrowed book details
router.get("/:id", BorrowDetails.list);



module.exports = router;