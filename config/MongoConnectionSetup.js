const mongoose = require("mongoose");

async function main(){
    try{
        let mongoUri = "mongodb://localhost:27017/itest"
        await mongoose.connect(mongoUri, {
        })
        mongoose.set('debug',(collectionName, method, query, doc)=>{
            console.log(`mongod=> ${collectionName}.${method}=>${JSON.stringify(query) | JSON.stringify(doc) }-`);
        })
        return mongoose
    }catch(e){
        console.log("MongoDB connection failed", e);
        throw e;
    }

}

module.exports = main