const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarianFinalSchema = new Schema({
    fullName: {
        type: String,

    },
    password: {
        type: String,

    },
    email: {
        type: String,
    }

});

module.exports = mongoose.model("LibrarianFinal", LibrarianFinalSchema);