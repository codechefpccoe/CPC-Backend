// Expressjs
const express = require("express");
const app = express();
app.use(express.json());

// Mongoose
const mongoose = require("mongoose");
const MongoDB = require("./Database/Mongo.js");

// Routes
const Login = require("./Routes/Login");
const Event = require("./Routes/Event");


app.get("/",(req, res) => {
    res.send("Hello World");
});
app.use("/Login", Login);
app.use("/Event", Event);




// Server listening
app.listen(8000, () => {
  console.log("App listening on port 8000");
});


// /api/v1.0/widePurpose/mainpurpose/CRUD

