// const asyncHandler = (func) => async (err , req, res, next)=>{
//     try{
//         if (err) throw err;
//         await func(req, res, next);
//         console.log("hh")
//     }catch(error){
//         console.error(`Coudn't Handle Connection  ${error}`);
//         res.status(error.code || 500).json({
//             success : false ,
//             message : error.message
//         })
//     }
// }

const asyncHandler = (requestHandler) =>{
    return (req , res , next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}

export default asyncHandler;