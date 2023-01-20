const express = require("express");
const router = express.Router();
const User = require("../Models/UserSchema");

router.post("/", (req, res) => {
  const { userName, email, password } = req.body;
  console.log(email, password);
  const NewUser = new User({
    userName,
    email,
    password,
  });
  NewUser.save((err) => {
    if (err) {
      // Duplicate username
      if (err.name === "MongoServerError" && err.code === 11000) {
        return res.status(500).send(err);
      }
      // Some other error
      return res.status(500).send(err);
    } else {
      return res
        .status(200)
        .send({ message: "User is registered successfully" });
    }
  });
});

module.exports = router;
