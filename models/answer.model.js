const { Schema, model} = require("mongoose")

const AnswerSchema = new Schema({
    userId : { type : Schema.Types.ObjectId, ref : "" },
    questionId : { type : Schema.Types.ObjectId, ref : "" },
    selectedOptionId : { type : Schema.Types.ObjectId, ref : "" },
    responseTime : { type : String }//will be converted to time stamps
},{
    timestamps : true,
    toJSON : { virtuals: true },
    toObject : { virtuals: true },
});

const AnswerModel = model("answers", AnswerSchema);
module.exports = AnswerModel;