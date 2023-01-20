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
});

const User = mongoose.model("User", UserSchema);

module.exports = User;