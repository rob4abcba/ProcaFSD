const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const exampleRoutes = require("./routes/sampleroutes");
// const studentRouter = require("./routes/studentRoutes");
const { studentRouter, employeeRouter } = require("./routes/studentRoutes");

const app = express();
const port = 3000;

const db = (module.exports = () => {
  try {
    mongoose.connect(
      // "mongodb+srv://nagireddy.h1bcq2e.mongodb.net/FSDCourse?retryWrites=true&w=majority",
      // mongodb+srv://rbcluster0.vxwq6pg.mongodb.net/?retryWrites=true&w=majority
      "mongodb+srv://rbcluster0.vxwq6pg.mongodb.net/FSDCourse?retryWrites=true&w=majority",
      {
        user: process.env.DBUSERNAME,
        pass: process.env.DBPASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connection SUCCESSFUL");
  } catch (error) {
    console.log(error);
    console.log("MongoDB Connection FAILED");
  }
});
db();

// mongodb+srv://rob4software:<password>@rbcluster0.vxwq6pg.mongodb.net/?retryWrites=true&w=majority

app.use("/", (req, res, next) => {
  console.log("A new request received at " + new Date(Date.now()));
  next();
});

app.use("/", exampleRoutes);
app.use("/students", studentRouter);
app.use("/employee", employeeRouter);

app.listen(port, () => {
  console.log(`sample-app/index.js: Listening at http://localhost:${port}`);
});
