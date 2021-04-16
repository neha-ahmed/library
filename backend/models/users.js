const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  
  phone: {
    type: String,
    required: true,
  },
  nationalID: {
    type: String,
    required: true,
  },
  
  

});

module.exports = mongoose.model("Users", UserSchema);
