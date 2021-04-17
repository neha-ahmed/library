const express = require("express");
const Librarian = require("../controllers/librarian");

const router = express.Router();



//@POST
//@creates new librarian
router.post("/addtodb", Librarian.store);


//@POST
//@for log in
router.post("/login", Librarian.login);

module.exports = router;