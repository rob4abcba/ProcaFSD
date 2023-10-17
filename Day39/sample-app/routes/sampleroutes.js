var express = require("express");
var exampleRoutes = express.Router();
exampleRoutes.get("/", (req, res) => {
  res.send("Sample App Received GET Request");
});

exampleRoutes.post("/", (req, res) => {
  res.send("Sample App Received POST Request");
});

exampleRoutes.put("/", (req, res) => {
  res.send("Sample App Received PUT Request");
});

exampleRoutes.delete("/", (req, res) => {
  res.send("Sample App Received DELETE Request");
});

module.exports = exampleRoutes;
