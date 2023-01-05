const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name mandatory"],
      min: 3,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is mandatory"],
      trim: true,
      unique: [true, "This email already registered"],
    },
    password: {
      type: String,
      required: [true, "Password mandatory"],
      min: 5,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userschema);

module.exports = User;
