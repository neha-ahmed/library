const Librarian = require("../models/librarian");
const bcrypt =require('bcrypt');

//@route POST user/
//@desc Add new Librarian
//@access public access
exports.store = async function (req, res) {

  const saltPassword= await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    try {
      
      const newLibrarian = new Librarian({ 
        fullName: req.body.fullName,
        username: req.body.username,
        password: securePassword,
        email:req.body.email
       });

      await newLibrarian.save();
      res.status(201).json({
        message: "Librarian has been added to database",
        createdProduct: newLibrarian,
      });
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error." });
    }
  };