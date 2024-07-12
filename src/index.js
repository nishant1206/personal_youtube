import dotenv from "dotenv";
import connect from "./db/connection.js";
import {app} from "./app.js"

dotenv.config({
    path : "./env"
});

connect();

app.listen(8000, ()=>{
    console.log(`App is Listening on https://localhost:8000`)
})