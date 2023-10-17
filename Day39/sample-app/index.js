const express = require("express");

const exampleRoutes = require("./routes/sampleroutes");
const app = express();
const port = 3000;

app.use("/", (req, res, next) => {
  console.log("A new request received at " + new Date(Date.now()));
  next();
});

app.use("/", exampleRoutes);

app.listen(port, () => {
  console.log(`sample-app/index.js: Listening at http://localhost:${port}`);
});
