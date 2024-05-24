const express = require("express");
const router = express.Router()

const {
    SaveOption,
    FindAllOptionByQuestionId,
    UpdateOptionDetails,
    DeleteOption,
    FindDetailOfOption
} = require("../controllers/options.controller")

router.post("/save", SaveOption);
router.get("/findOption/:questionId", FindAllOptionByQuestionId );
router.get("/optionDetail/:optionId", FindDetailOfOption);
//update multiple at once
router.put("/update", UpdateOptionDetails);
router.delete("/:optionId", DeleteOption)
module.exports = router