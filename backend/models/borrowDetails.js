const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BorrowDetailsSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
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
  },
  

});

module.exports = mongoose.model("Users", UserSchema);
