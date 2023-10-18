var express = require("express");
var studentRouter = express.Router();
const studentModel = require("../models/studentSchema");

// Get all the students data
studentRouter.get("/", async (request, response) => {
  const students = await studentModel.find({});
  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Get SPECIFIC student data using RollNo
studentRouter.get("/:RollNo", async (request, response) => {
  const student = await studentModel.find({ RollNo: request.params.RollNo });
  try {
    response.send(student);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = studentRouter;
