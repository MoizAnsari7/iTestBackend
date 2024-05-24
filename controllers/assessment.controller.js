//import assessment model
const assessmentModel = require("../models/assessment.model");
const AssessmentModel = require("../models/assessment.model")



const CreateAssessment = async (req, res)=>{
    try{
    const { name, description, timeLimit, createdBy } = req.body;
    
    //validate all the required field is provided or not
    if( !name || !description || !timeLimit || !createdBy)
    {
        return res.status(400).json({ error : "Please provide required fields!"});
    }

    //validate if assessment already exist


    let newAssessment = new AssessmentModel({
        name,
        description,
        timeLimit,
        createdBy
    })

    //save assessment
    let assessmentDetails = await newAssessment.save();
    return res.status(201).json({ msg : "Assessment created successfully", data : assessmentDetails })
}catch(e){
    console.log("catch CreateAssessment : ",e);
    return res.status(500).json({ message : "Internal server error", error : e })
}
}



const AssessmentsList = async ( req, res )=>{
    const assessmentList = await assessmentModel.find();
    return res.status(200).json({ message : "Assessment list fetched successfully", total : assessmentList.length , data : assessmentList })
}

const AssessmentsDetails = async ( req, res )=>{
    const assessmentDetails = await assessmentModel.findById(req.params.id);
    return res.status(200).json({ message : "Assessment details fetched successfully", data : assessmentDetails })
}

const UpdateAssessmentsDetails = (req, res)=>{
    let assessmentId = req.params.id;
    let modifiedDetails = req.body;
    //its exist or not
    //if exist then update
}

const DeleteAssessment = async (req, res)=>{
        //its exist or not
    //if exist then delete
    //use of findOneAndDelete
    try{
    //find 
    let assessment = await assessmentModel.findById(req.params.id )
    console.log("result ", assessment);
    if(!assessment)
        {
            return res.status(404).json({ message : "NOT_FOUND" })
        }
    let result = await assessmentModel.deleteOne({ _id : req.params.id});
    return res.status(200).json({ message : "DELETE SUCCESSFULLY" , data : result });
}catch(e)
    {
        console.log("catch DeleteAssessment",e);
        return res.status(500).json({ message:"Internal server Error", error : e})
    }
}
module.exports = {
    CreateAssessment,
    AssessmentsList,
    AssessmentsDetails,
    UpdateAssessmentsDetails,
    DeleteAssessment
}