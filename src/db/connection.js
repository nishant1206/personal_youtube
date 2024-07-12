import mongoose from "mongoose";
import { DB_NAME , DB_URL } from "./../constants.js"
import asynchandler from "./../utils/asyncHandler.js";

const connect = async ()=>{
    try{
        const conn = await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log(`connection Established from Host : ${conn.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connect;