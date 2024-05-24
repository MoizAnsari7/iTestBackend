const AnswerOptionsModel = require("../models/options.model")

const SaveOption = async ( req , res )=>{
    try{
        const { answerText, questionId, order, isCorrect, solution, explaination } = req.body;
    
        let userAnswer = new AnswerOptionsModel({ answerText, questionId, order, isCorrect, solution, explaination })
    
        //save option
        let optionDetails = await userAnswer.save();
        return res.status(201).json({ msg : "Question option saved successfully", data :  optionDetails })
    }catch(e){
        console.log("catch SaveOption : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const FindAllOptionByQuestionId = async ( req , res )=>{
    try{
        let { questionId } = req.params;
        let optionList = await AnswerOptionsModel.find({ questionId : questionId })
        if(optionList.length <= 0)
            {
                return res.status(404).json({ message : "Question option Not Found" })
            }
            return res.status(200).json({ message : "Option List fetched successfully", data : optionList })
    }catch(e){
        console.log("catch FindAllOptionByQuestionId : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const FindDetailOfOption = async ( req , res )=>{
    try{
        let { optionId } = req.params;
        let optionDetail = await AnswerOptionsModel.findById(optionId).populate()
        if(!optionDetail)
            {
                return res.status(404).json({ message : "Option Not Found" })
            }
            return res.status(200).json({ message : "Option details fetched successfully", data : optionDetail })
    }catch(e){
        console.log("catch FindExplainationOfRightAnswer : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const UpdateOptionDetails = ( req , res )=>{
    try{
    }catch(e){
        console.log("catch UpdateOptionDetails : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const DeleteOption  = async ( req , res )=>{
    try{
        let { optionId } = req.params;
        let deletedResponse = await AnswerOptionsModel.findByIdAndDelete(optionId);
        return res.status(200).json({ message : "Answer option cleared successfully", data : deletedResponse })
    }catch(e){
        console.log("catch DeleteOption : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

module.exports = {
    SaveOption,
    FindAllOptionByQuestionId,
    UpdateOptionDetails,
    DeleteOption,
    FindDetailOfOption
}