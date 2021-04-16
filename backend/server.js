const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const port = 4000;
const routes = require("./routes/index");

dotenv.config()
const connUri = process.env.DATABASE_ACCESS

mongoose.promise = global.Promise;
mongoose.connect(connUri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
