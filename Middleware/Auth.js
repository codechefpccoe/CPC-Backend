var jwt = require("jsonwebtoken");
const User = require("../Models/UserSchema");
require("dotenv").config();

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // Verify Token
    const verifyToken = await jwt.verify(token, `${process.env.SECRET_KEY}`);

    // Find User
    const user = await User.findOne({
      userName: verifyToken.user,
    });

    // Check if User Exists
    if (!user) {
      throw new Error("User not found");
    }

    // Set User and Token
    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized:No token provided" });
  }
};

module.exports = Authenticate;
