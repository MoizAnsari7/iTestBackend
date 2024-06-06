const express = require("express");
const cors = require("cors");

const _app = express();

//DB connection
require("./config/initializeMongoConnection")


//attach middileware
//cors origin
_app.use(cors())
//body parser
_app.use(express.json())


//redirect to respective routes
_app.use("/v1",require("./routes"));


//port to run backend server
const port = 5000
_app.listen(port, (err)=>{
    if(err)
        {
            console.log("server stopped",error);
        }else{
            console.log("Server is running on Port : ", 5000);
        }
})
               