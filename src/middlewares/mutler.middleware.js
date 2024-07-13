import multer from "multer";
import fs from "fs";



const storage = multer.diskStorage({
    destination : function(req , file , cb){
        try{
            cb(()=>{
                console.error("Disk Uplaod Callback Error")
            } , "./public/uploads");
        }catch (error){
            console.log("Disk Upload Error Destination" , error);
        }
    },
    filename : function (req, file , cb){
        try{
            const suffix = `${Date.now() % 100} - ${__dirname} ${Math.round(Math.random() % 1e5)}`;
            cb((err)=>{
                console.error(`Callaback Error Filename ${err}`);
                fs.unlink()
            } , "file.fieldname - " + suffix);
        } catch (error){
            console.log("Disk Upload Error FileName" , error);
        }
    }
})

export const upload = multer({storage : storage});