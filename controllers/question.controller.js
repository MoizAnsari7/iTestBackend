const QuestionModel = require("../models/question.model")
const saveQuestion = async ( req, res )=>{
    try{
        const { question, questionType, difficultyLevel, createdBy, isMarksBased, marks, testId } = req.body;
    
        let questionData = new QuestionModel({ question, questionType, difficultyLevel, createdBy, isMarksBased, marks, testId })
    
        //save question
        let questionDetails = await questionData.save();
        return res.status(201).json({ msg : "Question saved successfully", data : questionDetails })
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const findAllQuestionList = async ( req, res )=>{
    try{
        const questionList = await QuestionModel.find();
        if(questionList.length == 0)
            {
                return res.status(404).json({ message : "No question in the list", data : [] }) 
            }
    return res.status(200).json({ message : "Question list fatched successfully",count : questionList.length , data : questionList })
    }catch(e){
        console.log("catch  findAllQuestionList : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

//find individual question for a test
const findAllQuestionListWithFilter = async ( req, res )=>{
    try{
        const questionList = await QuestionModel.find({ testId : req.body.testId });
        if(questionList.lenght == 0)
            {
                return res.status(404).json({ message : "No question in the list", data : [] }) 
            }
    return res.status(200).json({ message : "Question list fatched successfully", data : questionList })

    }catch(e){
        console.log("catch findAllQuestionListWithFilter : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const questionDetails = async ( req, res )=>{
    try{
        const questionDetails = await QuestionModel.findById(req.params.questionId );
        if(questionDetails == 0)
            {
                return res.status(404).json({ message : "No question found", data : questionDetails }) 
            }
    return res.status(200).json({ message : "Question details fatched successfully", data : questionDetails })
    }catch(e){
        console.log("catch questionDetails : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const findQuestionWithOptions = async (req, res)=>{
    const questionsWithOption = await QuestionModel.find({ testId : req.params.testId }).populate({
        path: 'answerOptions',
        model: 'AnswerOption'
      });
      res.status(200).json({ message : "success", data : questionsWithOption});
    
}

const updateQuestion = ( req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const deleteQuestion = async ( req, res )=>{
    try{
        let questionId = req.params.questionId;
        let deletedResponse = await AnswerModel.findByIdAndDelete(questionId);
        return res.status(200).json({ message : "Question deleted successfully", data : deletedResponse })
    }catch(e){
        console.log("catch deleteQuestion : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }    
}

module.exports = {
    saveQuestion,
    findAllQuestionList,
    findAllQuestionListWithFilter,
    questionDetails,
    updateQuestion,
    deleteQuestion,
    findQuestionWithOptions
}