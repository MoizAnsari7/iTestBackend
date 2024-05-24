const express = require("express");
const router = express.Router()
const { findQuestionWithOptions,  saveQuestion, findAllQuestionList, findAllQuestionListWithFilter, questionDetails, updateQuestion, deleteQuestion } = require("../controllers/question.controller");

router.post("/save", saveQuestion);
router.post("/list", findAllQuestionList);
router.post("/filter", findAllQuestionListWithFilter);
//find question details
router.get("/:id", questionDetails);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);
router.get("/questionWithAnswer/:testId", findQuestionWithOptions);
module.exports = router