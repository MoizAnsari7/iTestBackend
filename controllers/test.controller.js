const TestModel = require("../models/test.model");
const AssessmentModel = require("../models/assessment.model")


const CreateTest = async (req, res )=>{
    try{
        const { testName, description, createdBy, timeLimit, assessmentId} = req.body;
    
        let testData = new TestModel({ testName, description, createdBy, timeLimit})
    
        //save question
        let testDetails = await testData.save();
        console.log(testDetails._id);
        if(assessmentId)
            {
               const updatedAssessment = await AssessmentModel.findByIdAndUpdate( assessmentId, { $push : { test : [ testDetails._id ] }  }, { new : true} )
               console.log("ab ",updatedAssessment);
            }
        return res.status(201).json({ msg : "Test saved successfully", data : testDetails })
    }catch(e){
        console.log("catch CreateTest : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

const TestList = async (req, res )=>{
    try{
        const testList = await TestModel.find();
        if(testList.length == 0)
            {
                return res.status(404).json({ message : "No test found", data : [] }) 
            }
    return res.status(200).json({ message : "Test list fatched successfully",count : testList.length, data : testList })

    }catch(e){
        console.log("catch TestList : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }    
}

// const TestListByAssessmentId = async (req, res )=>{
//     try{
//         const testList = await TestModel.find({  });
//         if(testList.length == 0)
//             {
//                 return res.status(404).json({ message : "No test found", data : [] }) 
//             }
//     return res.status(200).json({ message : "Test list fatched successfully",count : testList.length, data : testList })

//     }catch(e){
//         console.log("catch TestList : ",e);
//         return res.status(500).json({ message : "Internal server error", error : e })
//     }    
// }

const TestDetails = async (req, res )=>{
    try{
        const testDetails = await TestModel.find();
        if(!testDetails)
            {
                return res.status(404).json({ message : "No test found", data : [] }) 
            }
    return res.status(200).json({ message : "Test details fatched successfully", data : testDetails })
    }catch(e){
        console.log("catch TestDetails : ",e);
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

const DeleteTest = async (req, res )=>{
    try{
        let testId = req.params.testId;
        let deletedResponse = await AnswerModel.findByIdAndDelete(testId);
        return res.status(200).json({ message : "Test deleted successfully", data : deletedResponse })
    }catch(e){
        console.log("catch DeleteTest : ",e);
        return res.status(500).json({ message : "Internal server error", error : e })
    }
}

module.exports = { CreateTest, TestList, TestDetails, UpdateTestDetails, DeleteTest }