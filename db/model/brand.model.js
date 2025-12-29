 import mongoose, { Types } from "mongoose";



 const Schema= new mongoose.Schema({
    name:{
        type:String,
        unique:[true,"name is required"],
        trim:true,
        required:[true,"name is required"],
        minlength:[3,"name must be at least 3 characters"],
        maxlength:[32,"name must be at most 32 characters"]
    },
    slug:{
        type:String,
        lowercase:true,
        required:[true,"slug is required"],
    },
    logo:String,
    createdBy:{
        type:Types.ObjectId,
        ref:"User"
    }
 },{
    timestamps:true,
    versionKey:false
 })

 export  const Brand = mongoose.model("Brand",Schema);