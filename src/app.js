import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.static("public"));
app.use(cors({
    origin : "https://localhost:3000",
    optionsSuccessStatus : 200
}));
app.use(express.json({limit : "16kb"}));
app.use(express.urlencoded({extended : true , limit : "16kb"}));
app.use(cookieParser());

// user router
import router from "./routes/user.routes.js";

// routes
app.use("/api/v1/users" , router);

export {app};