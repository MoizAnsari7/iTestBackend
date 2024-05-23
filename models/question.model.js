const { Schema, model } = require("mongoose")

const QuestionSchema = new Schema({
    question : String,
    questionType : String,
    testId : { type : Schema.Types.ObjectId, ref : "tests" },
    difficultyLevel : { type : String, enum : ["EASY", "MEDIUM", "HARD"], default : "EASY", required : true},//enum 
    createdBy : { type : Schema.Types.ObjectId, ref : "users" }
},{
    timestamps : true,
    toJSON : { virtuals: true },
    toObject : { virtuals: true },
})

const QuestionModel = model("questions",QuestionSchema)
module.exports = QuestionModel