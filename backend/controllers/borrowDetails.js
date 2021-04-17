const BorrowDetails = require('../models/borrowDetails');
const Book = require('../models/books');

//@route POST borrowDetails/ check-out
//@desc Add new borrow details and updates book status to not available
//@access public access
exports.store = async function (req, res) {
    try {
      const bookid = req.body.bookID;

        const status= await Book.findById(bookid, 'status')
        console.log(status)
        if(status.status=="not available"){
          console.log('book already issued to someone else')
          res.status(201).json({
            message: "book already issued to someone else"
          });
        }else{
          const newBorrowDetails =  new BorrowDetails({...req.body})
          await newBorrowDetails.save();
      
        // .validate(function (error) {
        //     console.log("validation error:", error)
        // });
        // let error;
        // error = newBorrowDetails.validateSync();
        // assert.equal(error.errors['phone'].message,
        // 'Not a valid phone number!');

        await newBorrowDetails.save();
        //console.log(newBorrowDetails)

        const borrowid = newBorrowDetails.id;
        //console.log(borrowid)
        const borrow = await BorrowDetails.findById(borrowid).populate('bookID')
        const bookid = borrow.bookID.id;
        const book= await Book.findByIdAndUpdate(bookid,
            { $set:{status: "not available" }, $push:{borrowDetailsID: borrowid}},
            { new: true }
          );

      res.status(201).json({
        message: "Borrow details has been added to database",
        createdProduct: {newBorrowDetails, book},
      });
    }
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error." });
    }
  };

// @route GET  borrowed book details / CHECK IN / change book status to available
// @desc 
// @access Public
exports.list = async function (req, res) {
  try {
    let bookid = req.params.id;
    
    console.log(bookid)
    
      const borrowDetails = await BorrowDetails.findOneAndUpdate({returnDate: null , bookID: bookid},
          { $set: {returnDate: new Date() }},
          { new: true }
          );
    console.log("borrow details", borrowDetails)
    
    const book= await Book.findByIdAndUpdate(bookid,
      { $set:{status: "available" }},
      { new: true }
    );

    res.status(200).json({ borrowDetails }); 
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
};
  
