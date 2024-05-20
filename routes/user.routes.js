const express = require("express");
const router = express.Router();
//import controllers
const { userRegistration } = require("../controllers/user.controller")


//post api : for new user registration.
router.post("/register", userRegistration);





module.exports = router