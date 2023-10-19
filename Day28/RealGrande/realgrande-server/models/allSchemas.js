const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
  _id: Number,
  address: String,
  county: String,
  description: String,
  price: Number,
  photo: String,
});

const UserSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  password: String,
  gender: {
    type: String,
    enum: ["Male", "Female", "Rather Not to Say"],
    default: "Rather Not to Say",
  },
  type: customer | realtor,
});
