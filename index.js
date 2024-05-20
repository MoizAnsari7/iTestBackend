const express = require("express");
const _app = express();
//port to run backend server
const port = 3000
_app.listen(port, (err)=>{
    if(err)
        {
            console.log("server stopped",error);
        }else{
            console.log("Server is running on Port : ", 3000);
        }
})
