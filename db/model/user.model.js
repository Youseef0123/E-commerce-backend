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
    email:{
        type:String,
        unique:[true,"email is required"],
        trim:true,
        required:[true,"email is required"],
        lowercase:true,
    },
    password:String,
    role:{
        type:String,
        enum:["user","admin","manager"],
        default:"user"
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    isBlocked:{
        type:Boolean,
        default:false
    },

   
 },{
    timestamps:true,
    versionKey:false
 })



 export const User = mongoose.model("User",Schema);