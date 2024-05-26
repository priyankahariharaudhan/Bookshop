const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
  },
  email: {
    type: String,
    required: [true, "Must provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Must provide password"],
  },
});
module.exports = mongoose.model("users", UserSchema);
