// Express
const express = require("express");
const router = express.Router();
// Mongoose Model
const User = require("../Models/UserSchema");
// JsonWebToken
const jwt = require("jsonwebtoken");
// Dotenv
require("dotenv").config();
// Cookie Parser
const cookieParser = require("cookie-parser");
router.use(cookieParser());
// Bcrypt
const bcrypt = require("bcrypt");
// Middleware for Authentication
const Authenticate = require("../Middleware/Auth");

//? User Login
router.post("/", async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Find User
    const user = await User.findOne({
      userName: userName,
    });

    // Check if Password is Correct
    const passwordIsValid = await bcrypt.compareSync(password, user.password);

    if (!user & !passwordIsValid) {
      return res.status(404).send({
        message: "User Not found or Invalid Password!",
      });
    }

    // Generate Cookie
    const token = await jwt.sign({ user: user.userName }, "codechefpccoe");
    console.log(token);

    res.cookie("token", token, { httpOnly: true });

    // Success
    User.updateOne(user, { $push: { Cookie: token } }, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send({
          message: "Error in Updating Cookie. Please try again later",
        });
      }
      return res
        .status(200)
        .send({ message: "User is logged in successfully", token : token });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
