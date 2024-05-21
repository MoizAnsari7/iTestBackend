const express = require("express");
const router = express.Router();

//import routes
//user routes
const UserRoutes = require("./user.routes");
//assessment routes
const AssessmentRoutes = require("./assessment.routes");

router.use("/user", UserRoutes);
router.use("/assessment", AssessmentRoutes);

module.exports = router;