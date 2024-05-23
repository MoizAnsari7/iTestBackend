const AnswerModel = require("../models/answer.model");

const SubmitAnswer = async ( req, res )=>{
    try{
        const { userId, questionId, selectedOptionId, responseTime } = req.body;
    
        let userAnswer = new AnswerModel({ userId, questionId, selectedOptionId, responseTime })
    
        //save assessment
        let userAnswerDetails = await userAnswer.save();
        return res.status(201).json({ msg : "user response saved successfully", data : userAnswerDetails })
    
    }catch(e){
        console.log("catch SubmitAnswer : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const GetUserAnswerOfQuestionByQuestionId = async ( req, res )=>{
    try{
        let { userId, questionId } = request.params;
        let userAnswer = await AnswerModel.find({ userId, questionId  }).pupulate()
        if(!userAnswer)
            {
                return res.status(404).json({ message : "Answer Not Found" })
            }
            return res.status(404).json({ message : "Answer fetched successfully", data : userAnswer })
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const  GetUserAnswerOfAllTestQuestion = ( req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const UpdateResponse = ( req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}


const DeleteResponse = ( req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}



module.exports = { SubmitAnswer, GetUserAnswerOfQuestionByQuestionId, GetUserAnswerOfAllTestQuestion, UpdateResponse, DeleteResponse }