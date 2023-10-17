var express = require("express");
var exampleRoutes = express.Router();

app.use("/", (req, res, next) => {
  console.log("A new request received at " + new Date(Date.now()));
});

app.get("/", (req, res) => {
  res.send("index.js: another app.get");
});

app.get("/", (req, res) => {
  res.send("index.js: app.get");
});

app.post("/", (req, res) => {
  res.send("index.js: app.post");
});

app.put("/", (req, res) => {
  res.send("index.js: app.put");
});

app.delete("/", (req, res) => {
  res.send("index.js: app.delete");
});
