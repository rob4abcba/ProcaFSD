const express = require("express");
const allRouter = express.Router();
const multer = require("multer");
let getFields = multer();

const { Houses, Users, Enquiries } = require("../models/allSchemas");

allRouter.get("/", async (request, response) => {
  const housesData = await Houses.find({});
  try {
    response.send(housesData);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = allRouter;
