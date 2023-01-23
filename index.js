// Expressjs
const express = require("express");
const app = express();
app.use(express.json());

// Mongoose
const mongoose = require("mongoose");
const MongoDB = require("./Database/Mongo.js");

// Routes
const Login = require("./Routes/Login");
const Signup = require("./Routes/Signup");
const Event = require("./Routes/Event");
const Dashboard = require("./Routes/Dashboard");
const cors = require("cors")

var corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  methods: "GET, POST, PUT",
  credentials: true
}

app.use(cors(corsOptions));

app.get("/",(req, res) => {
    res.send("Hello World");
});
app.use("/api/v1.0/User/Login", Login);
app.use("/api/v1.0/User/Signup", Signup);
app.use("/api/v1.0/User/GetUser", Dashboard);
app.use("/Event", Event);



// Server listening
app.listen(8000, () => {
  console.log("App listening on port 8000");
});


// /api/v1.0/widePurpose/mainpurpose/CRUD

