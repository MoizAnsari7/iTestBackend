const UserModel = require("../models/user.model");
// const bcrypt = require("bcrypt");
const userRegistration = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        //Check all the mandetory field provided into body
        if (!email || !password) {
            return res.status(400).json({ error: "Please provide required fields" })
        }

        //check if user email already exist
        // Check for existing user
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'Email already in use' });
        }
        //hash original password
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(password, salt);
        const hashPassword = password;


        //create userModel and save
        let newUser = new UserModel({
            firstName: firstName ? firstName : "",
            lastName: lastName ? lastName : "",
            email,
            password: hashPassword
        })
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" })
    } catch (e) {
        console.log("userRegistration", e);
        res
            .status(500)
            .json({ message: "Internal server error", error: e });
    }
}

const userList = async (req, res) => {
    try {
        let userList = await UserModel.find();
        res.status(201).json({ message: "User list fetch successfully",  total : userList.length, data: userList });
    } catch (e) {
        console.log("userList catch", e);
        res
            .status(500)
            .json({ message: "Internal server error", error: e });
    }
}



module.exports = {
    userRegistration,
    userList
}