import dotenv from "dotenv";
import connect from "./db/connection.js";

dotenv.config({
    path : "./env"
});

connect();