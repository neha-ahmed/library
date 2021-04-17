const Librarian = require("../models/librarianfinal");
const bcrypt = require('bcrypt');

//@route POST sign up librarian/
//@desc Add new Librarian
//@access public access
exports.store = async function (req, res) {

  try {
    const newLibrarian = new Librarian({ ...req.body });
    const salt = await bcrypt.genSalt(10);
    newLibrarian.password = await bcrypt.hash(newLibrarian.password, salt);

    await newLibrarian.save();
    res.status(201).json({
      message: "Librarian has been added to database",
      createdProduct: newLibrarian,
    });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
};


//@route GET log in/
exports.login = async function (req, res) {
  try {
    
    let X = await Librarian.findOne({ email: req.body.email });
    if (!X) return res.status(400).send("Invalid user or password");

    const validpass = await bcrypt.compare(req.body.password, X.password)
    if (!validpass) return res.status(400).send("Invalid user or password");
    res.status(201).json(X);


  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
};