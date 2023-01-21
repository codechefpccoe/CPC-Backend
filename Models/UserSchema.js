// Mongoose Schema for User
const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Cookie: {
    type: [String],
  },
});



const User = mongoose.model("User", UserSchema);

module.exports = User;