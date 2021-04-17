const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BorrowDetailsSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  
  phone: {
    type: String,
    required: true,
    // match:  /\d{2}-\d{3}-\d{4}/
     
  },
  nationalID: {
    type: Number,
    required: true,
    maxlength: 11,
  },
  bookID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Books",
  },
  dateBorrowed: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
    default: null,
  },
  reqReturnDate :{
    type: Date,
  }
  

});

module.exports = mongoose.model("BorrowDetails", BorrowDetailsSchema);
