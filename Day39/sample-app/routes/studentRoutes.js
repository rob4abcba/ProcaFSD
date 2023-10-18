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

// Get GROUP of students using College
studentRouter.get("/college/:College", async (request, response) => {
  const studentsByCollege = await studentModel.find({
    College: request.params.College,
  });
  try {
    response.send(studentsByCollege);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Get GROUP of students using Section
studentRouter.get("/section/:Section", async (request, response) => {
  const studentsBySection = await studentModel.find({
    Section: request.params.Section,
  });
  try {
    response.send(studentsBySection);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Get students whose name includes substring
studentRouter.get("/name/:Substring", async (request, response) => {
  const studentsByName = await studentModel.find({
    Name: {
      $regex: request.params.Substring,
      $options: "i",
    },
  });
  try {
    response.send(studentsByName);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = studentRouter;
