const express = require("express");
const router = express.Router()
const {   saveQuestion, findAllQuestionList, findAllQuestionListWithFilter, questionDetails, updateQuestion, deleteQuestion } = require("../controllers/question.controller");

app.post("/save", saveQuestion);
app.post("/list", findAllQuestionList);
app.post("/filter", findAllQuestionListWithFilter);
//find question details
app.get("/:id", questionDetails);
app.put("/:id", updateQuestion);
app.delete("/:id", deleteQuestion);

module.exports = router