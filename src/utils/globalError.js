export const globalError=(err,req,res,next)=>{
      res.status(err.statusCode || 500).send({message:"Error" ,error:err.message });

}