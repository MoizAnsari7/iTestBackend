const express = require("express");
const router = express.Router();
const { SubmitAnswer, GetUserAnswerOfQuestionByQuestionId, GetUserAnswerOfAllTestQuestion, UpdateResponse, DeleteResponse } = require("../controllers/answer.controller");

//save response of a question as answer
router.post("/save", SubmitAnswer);

//
router.get("/answer/:questionId/:userId", GetUserAnswerOfQuestionByQuestionId);

//find whole test as test copy filled by the user.
router.get("/testAnswer/:testId", GetUserAnswerOfAllTestQuestion);

//update answer
router.put("/update", UpdateResponse);

//delete answer
router.delete("/:answerId");


module.exports = router;