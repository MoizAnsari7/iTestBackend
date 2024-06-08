const express = require("express");
const router = express.Router()
const { CreateAssessment, TestListByAssessmentId, AssessmentsList, AssessmentsDetails, UpdateAssessmentsDetails, DeleteAssessment } = require("../controllers/assessment.controller");

//create new assessment
router.post("/create", CreateAssessment);

//list of assessment
router.get("/list", AssessmentsList);


//list of test with assessement id
router.get("/testList/:assessmentId", TestListByAssessmentId);

//assessment details
router.get("/:id", AssessmentsDetails);

//update assessment details
router.put("/:id", UpdateAssessmentsDetails);

//todo : delete single, delete multiple, delete softly
//hard delete assessment
router.delete("/:id", DeleteAssessment);

module.exports = router;