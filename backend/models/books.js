const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
  publishyear: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status:{
      type: String,
      required: true,
  }
  

});

module.exports = mongoose.model("Books", BookSchema);
