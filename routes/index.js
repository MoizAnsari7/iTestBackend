const express = require("express");
const router = express.Router();

//import routes
const UserRoutes = require("./user.routes");

router.use("/user",UserRoutes);

module.exports = router;