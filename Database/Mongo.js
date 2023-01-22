// Mongoose
const mongoose = require("mongoose");

// Dotenv
require("dotenv").config();

// MongoDB URI
// const DB = process.env.MONGODB_URI;
const DB = "mongodb+srv://admin:admin@cpc-db.3ie8obm.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);

mongoDB().catch((err) => console.log(err));

async function mongoDB() {
  await mongoose.connect(
    DB,
    {
      dbName: "CodeChefPCCOE",
    },
    () => {
      console.log("Connected successfully to MongoDb :)");
    }
  );
}

module.exports = mongoDB;
