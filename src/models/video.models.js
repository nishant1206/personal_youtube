import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = mongoose.Schema({
    videoFile : {
        type : String,
        required : true,
        unique : true
    }, 
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    views : {
        type : Number,
        default : 0
    },
    isPublished : {
        type : Boolean,
        default : false
    },
    thumbnail : {
        type : String,
        required : true,
        unique : true
    },
    Owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,

    }
});

videoSchema.plugin(mongooseAggregatePaginate);


export const Video = mongoose.model("Video" , videoSchema);