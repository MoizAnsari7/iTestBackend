const AnswerOptionsModel = require("../models/option.model")

const SaveOption = ( req , res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const FindAllOptionByQuestionId = ( req , res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const FindExplainationOfRightAnswer = ( req , res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const UpdateOptionDetails = ( req , res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const DeleteOption  = ( req , res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

module.exports = {
    SaveOption,
    FindAllOptionByQuestionId,
    FindExplainationOfRightAnswer,
    UpdateOptionDetails,
    DeleteOption
}