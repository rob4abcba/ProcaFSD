var express = require("express");

const multer = require("multer");
let getFields = multer();

var studentRouter = express.Router();
var employeeRouter = express.Router();
const { StudentModel, EmpModel } = require("../models/studentSchema");

// Get all the students data
studentRouter.get("/", async (request, response) => {
  const students = await StudentModel.find({});
  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Get the data using Roll Number
studentRouter.get("/:RollNo", async (request, response) => {
  const students = await StudentModel.find({ RollNo: request.params.RollNo });
  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Get GROUP of students using College //MG: Might need to comment this section out
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

// Get the data using Section name
studentRouter.get("/section/:section", async (request, response) => {
  const students = await StudentModel.find({ Section: request.params.section });
  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

//insert a student data
studentRouter.post("/", getFields.none(), async (req, res) => {
  try {
    const newstudent = new StudentModel(req.body);
    let result = await newstudent.save();
    result = result.toObject();
    console.log(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//update the college name based on Roll Number
studentRouter.put("/:RollNo", async (request, response) => {
  const students = await StudentModel.updateOne(
    { RollNo: { $eq: request.params.RollNo } },
    { College: request.query.CName }
  );
  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

/ Get students whose name includes substring //MG: Might need to comment this out
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

//Delete student using Roll Number
app.delete("/:RollNo", async (request, response) => {
  const students = await StudentModel.deleteOne({
    RollNo: request.params.RollNo,
  });
  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Get all the data from EmployeewithExp collection
employeeRouter.get("/", async (request, response) => {
  const empldata = await EmpModel.find({});
  try {
    response.send(empldata);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = { studentRouter, employeeRouter };
