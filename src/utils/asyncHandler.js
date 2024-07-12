const asyncHandler = (func) => async (err , req, res, next)=>{
    try{
        if (err) throw err;
        await func(req, res, next);
    }catch(error){
        console.error(`Coudn't Handle Connection  ${error}`);
        res.status(error.code || 500).json({
            success : false ,
            message : error.message
        })
    }
}

export default asyncHandler;