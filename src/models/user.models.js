import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const Schema = new mongoose.Schema({
    userId :{
        type : Number,
        required : true,
        unique : true
    }, 
    name : {
        type : String ,
        required : true ,
        index : true
    },
    email :{
        value : String, 
        required : true ,
        unique : true
    },
    username : {
        type : String ,
        unique : true ,
        required : true,
        lowercase : true,
        trim : true,
        index : true
    }, 
    password :{
        type : String,
        unique : true,
        required : true,
    },
    watchHistory : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Video"
        }
    ],
    avatar : {
        src : String,
        FailedMessage : "unable to Load Image"
    },
    coverImage : {
        src : String, 
        required : true ,
        
    }
} , {timestamps : true});

userSchema.pre("save" , (next)=>{
    if (this.isModified("password")){
        this.password = bcrypt.hash(this.password , 10);
    }
    next();
});

userSchema.methods.isPasswordCorrect = async function (passowrd){
    return await bcrypt.compare(passowrd , this.password);
}

userSchema.methods.generateAccessToken = async function (){
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            fullname : this.name,
            username : this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = async function (){
    return jwt.sign(
        {
            _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const userSchema = mongoose.model("User" , Schema);