const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  RollNo: Number,
  Name: String,
  College: String,
  Section: String,
});

const Studentdata = mongoose.model("Student", StudentSchema);
module.exports = Studentdata;
