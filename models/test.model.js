const { model, Schema } = require("mongoose")

const TestSchema = new Schema({
    testName : String,
    description : String,
    createdBy : { type : Schema.Types.ObjectId, ref : "users" },
    timeLimit : Number, //time in minutes
},{
    timestamps : true,
    toJSON : { virtuals: true },
    toObject : { virtuals: true },
})

const TestModel = model("tests",TestSchema)
module.exports = TestModel