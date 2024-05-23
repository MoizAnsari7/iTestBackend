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
const AnswerOptionRoutes = require("./option.routes");
//user response as answer of a question routes
const AnswerRoutes = require("./answer.routes"); 

router.use("/user", UserRoutes);
router.use("/assessment", AssessmentRoutes);
router.use("/question", QuestionRoutes );
router.use("/option", AnswerOptionRoutes);
router.use("/answer", AnswerRoutes);

module.exports = router;