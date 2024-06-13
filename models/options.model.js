const { Schema, model } = require("mongoose");

const AnsOptionSchema = new Schema({
    answerText : String,
    questionId :  { type : Schema.Types.ObjectId , required : true, ref : "questions" },
    testId : { type : Schema.Types.ObjectId , required : true , ref : "tests"},
    order :  { type : Number , default : 0 },
    isCorrect :  { type : Boolean , default : false},
    solution : { type : String , default : "Not Provided"} ,
    explaination : { type : String , default : "Not Provided"}
})

const ansOptionModel = model("answerOptions", AnsOptionSchema ); 
module.exports = ansOptionModel;
