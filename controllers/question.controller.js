const saveQuestion = ( req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const findAllQuestionList = ( req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

//find individual question for a test
const findAllQuestionListWithFilter = ( req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const questionDetails = ( req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const updateQuestion = ( req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const deleteQuestion = ( req, res )=>{
    
}

module.exports = {
    saveQuestion,
    findAllQuestionList,
    findAllQuestionListWithFilter,
    questionDetails,
    updateQuestion,
    deleteQuestion
}