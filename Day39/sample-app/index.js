const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const exampleRoutes = require("./routes/sampleroutes");

const app = express();
const port = 3000;

const db = (module.exports = () => {
  try {
    mongoose.connect(
      "mongodb+srv://nagireddy.h1bcq2e.mongodb.net/FSDCourse?retryWrites=true&w=majority",
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

app.use("/", (req, res, next) => {
  console.log("A new request received at " + new Date(Date.now()));
  next();
});

app.use("/", exampleRoutes);

app.listen(port, () => {
  console.log(`sample-app/index.js: Listening at http://localhost:${port}`);
});
