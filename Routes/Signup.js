// Express
const express = require("express");
const router = express.Router();

// Mongoose Model
const User = require("../Models/UserSchema");

// Bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 5;

//? User Signup
router.post("/", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    //   Password Encryption Using Bcrypt
    const salt = await bcrypt.genSaltSync(saltRounds);
    const encryptedPassword = await bcrypt.hashSync(password, salt);

    //   New User
    const NewUser = new User({
      userName,
      email,
      password: encryptedPassword,
    });

    //  Save User and Check for Errors
    NewUser.save((err) => {
      if (err) {
        // Duplicate username
        if (err.name === "MongoServerError" && err.code === 11000) {
          return res.status(500).send(err);
        }
        // Some other error
        return res.status(500).send(err);
      } else {
        // Success
        return res
          .status(200)
          .send({ message: "User is registered successfully" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
