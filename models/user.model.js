const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    // _id : { type : String },
    firstName : { type : String },
    lastName : { type : String },
    email : { type : String },
    password : { type : String },
    address : { type : String },
    city : { type : String },
    state : { type : String },
    profileUrl : { type : String },
    profile : { type : String },
},{
    timestamps : true,
    toJSON : { virtuals: true },
    toObject : { virtuals: true },
})

const UserModel = model("users",userSchema)
module.exports = UserModel