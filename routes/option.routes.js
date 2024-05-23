const express = require("express");
const router = express.Router()

const {
    SaveAnswer,
    FindAllOptionByQuestionId,
    FindExplainationOfRightAnswer,
    UpdateOptionDetails,
    DeleteOption
} = require("../controllers/option.controller")

app.post("/save", SaveAnswer);
app.get("/findOption/:questionId", FindAllOptionByQuestionId );
app.get("/optionDetail/:optionId", FindExplainationOfRightAnswer);
//update multiple at once
app.put("/update", UpdateOptionDetails);
app.delete("/:optionId", DeleteOption)
module.exports = router