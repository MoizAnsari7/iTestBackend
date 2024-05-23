const express = require("express");
const router = express.Router();

//import routes
//user routes
const UserRoutes = require("./user.routes");
//assessment routes
const AssessmentRoutes = require("./assessment.routes");
//question routes
const QuestionRoutes = require("./question.routes");
//question option routes
const AnswerOptionRoutes = require("./answer-option.routes");


router.use("/user", UserRoutes);
router.use("/assessment", AssessmentRoutes);
router.use("/question", QuestionRoutes );
router.use("/option", AnswerOptionRoutes);

module.exports = router;