const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarianSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  
  

});

module.exports = mongoose.model("Librarian", LibrarianSchema);
