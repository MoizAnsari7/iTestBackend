const CreateTest = (req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const TestList = (req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }    
}

const TestDetails = (req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const UpdateTestDetails = (req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const DeleteTest = (req, res )=>{
    try{
    }catch(e){
        console.log("catch CreateAssessment : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

module.exports = { CreateTest, TestList, TestDetails, UpdateTestDetails, DeleteTest }