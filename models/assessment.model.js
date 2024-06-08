    const { Schema, model } = require("mongoose")

    const assessmentSchema = new Schema({
        name : String,
        description : String,
        timeLimit : { type: Number, required: true },//in minutes
        createdBy : { type: Schema.Types.ObjectId, ref: 'users' },
        test : [{
            type : Schema.Types.ObjectId , ref: 'tests'
        }]
    },{
        timestamps : true,
        toJSON : { virtuals: true },
        toObject : { virtuals: true },
    })

    const assessmentModel = model("assessments", assessmentSchema)
    module.exports = assessmentModel