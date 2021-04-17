const Books = require('../models/books');
const BorrowDetails = require('../models/borrowDetails');

//@route POST book/
//@desc Add new book
//@access public access
exports.store = async function (req, res) {

    try {
        const newBook = new Books({ 
            title: req.body.title,
            ISBN: req.body.ISBN,
            publishyear: req.body.publishyear,
            price:req.body.price,
            status:req.body.status
           });
       
      await newBook.save();
      
      res.status(201).json({
        message: "Book has been added to database",
        createdProduct: newBook,
      });
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error." });
    }
  };

  
// @route GET books
// @desc Returns all books on homepage
// @access Public
exports.list = async function (req, res) {
    try {
      let match = {};
      if (req.query.title) {
        match = { ...match, title: { $regex: req.query.title, $options: "i" } };
      }
      const books = await Books.find(match);
      res.status(200).json({ books });
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error." });
    }
  };

