import dotenv from "dotenv";
import connect from "./db/connection.js";
import {app} from "./app.js"

dotenv.config({
    path : "./env"
});

connect().then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>console.log(`Listening`))
})