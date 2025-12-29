import mongoose, { Types } from "mongoose";

const categorySchema = new mongoose.Schema({
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
    Category:{
        type:Types.ObjectId,
        ref:"Category" 
    }
   
     
},
{
    timestamps:true,
    versionKey:false
})


export const Category = mongoose.model("Category", categorySchema);