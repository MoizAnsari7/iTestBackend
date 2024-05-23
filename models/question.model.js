const { Schema, model } = require("mongoose")

const QuestionSchema = new Schema({
    question : String,
    questionType : { type : String, enum : [ "MCQ4", "MCQ2","CODING","EASSAY", "VOICE_ANSWER" ], default : "MCQ4",required : true },
    testId : { type : Schema.Types.ObjectId, ref : "tests" },
    difficultyLevel : { type : String, enum : ["EASY", "MEDIUM", "HARD"], default : "EASY", required : true},//enum 
    createdBy : { type : Schema.Types.ObjectId, ref : "users" },
    isMarksBased : { type : Boolean, default : false },
    marks : { type : Number, default : 0}
},{
    timestamps : true,
    toJSON : { virtuals: true },
    toObject : { virtuals: true },
})

const QuestionModel = model("questions",QuestionSchema)
module.exports = QuestionModel