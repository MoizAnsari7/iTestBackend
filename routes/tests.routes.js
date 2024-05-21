const express = require("express");
const router = express.Router()
const { CreateTest, TestList, TestDetails, UpdateTestDetails, DeleteTest } = require("../controllers/assessment.controller");

//create new Test
router.post("/create", CreateTest);

//list of Test
router.get("/list", TestList);

//Test details
router.get("/:id", TestDetails);

//update Test details
router.put("/:id", UpdateTestDetails);

//todo : delete single, delete multiple, delete softly
//hard delete Test
router.delete("/:id", DeleteTest);

module.exports = router;