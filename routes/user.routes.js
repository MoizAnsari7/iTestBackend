const express = require("express");
const router = express.Router();
//import controllers
const { userRegistration, userList } = require("../controllers/user.controller")


//post api : for new user registration.
router.post("/register", userRegistration);

//User list api.
router.get("/list", userList);




module.exports = router