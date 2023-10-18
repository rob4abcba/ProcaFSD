const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  RollNo: Number,
  Name: String,
  College: String,
  Section: String,
});

const EmpexpSchema = new mongoose.Schema(
  {
    Exp: Number,
    Ename: String,
  },
  {
    collection: "employeeswithexp",
  }
);

const StudentModel = mongoose.model("Student", StudentSchema);
const EmpModel = mongoose.model("employeeswithexp", EmpexpSchema);
module.exports = { StudentModel, EmpModel };
