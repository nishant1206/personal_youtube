import mongoose from "mongoose";
import { DB_NAME } from "./../constants"

const connect = async ()=>{
    try{
        const conn = await mongoose.connect(`${process.env.MONGO_DATABASE_URL}/${DB_NAME}`);
        console.log(`connection Established from Host : ${conn.connection.host}`);
    }catch(error){
        console.error(error);
        process.exit(1);
    }
}

export default connect;