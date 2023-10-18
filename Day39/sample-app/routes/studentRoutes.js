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

module.exports = studentRouter;
