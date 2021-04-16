const User = require("../models/users");
const bcrypt =require('bcrypt');

//@route POST user/
//@desc Add new user
//@access public access
exports.store = async function (req, res) {

    try {
      const newUser = new User({ ...req.body });
       
      await newUser.save();
      console.log(newUser)
      res.status(201).json({
        message: "User has been added to database",
        createdProduct: newUser,
      });
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error." });
    }
  };