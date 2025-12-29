import AppError from "../utils/AppError.js";

export const handleAsyncError=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(err=>next(new AppError(err.message,422)));
    }
}