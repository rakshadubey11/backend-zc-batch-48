const express = require("express");
const mongoose = require("mongoose");
const app = express();
const APIRouter = require("./Routes/APIRouters");
const cors = require("cors");

const PORT = process.env.PORT || 5003;
//const URI = "mongodb://127.0.0.1:27017/batch48edureka";
const URI =
  "mongodb+srv://batch48:batch48@edureka.qthybua.mongodb.net/batch48edureka?retryWrites=true&w=majority";
// to enable/access post data (body-parser)

app.use(cors()); // enable cors request

app.use(express.json()); // convert string JSON data to pure json data
app.use(express.urlencoded({ extended: false })); // normal post data  to json data

app.use("/", APIRouter);
console.log("connecting to db ....");
mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("db connected successfully !!!");
      console.log("zomato api is running on port :", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });