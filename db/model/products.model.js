 import mongoose, { Types } from "mongoose";



 const Schema= new mongoose.Schema({
    name:{
        title:String,
        trim:true,
        required:[true,"title is required"],
        minlength:[3,"title must be at least 3 characters"],
        maxlength:[32,"title must be at most 32 characters"]
    },

    description:{
        type:String,
        trim:true,
        required:[true,"description is required"],
        minlength:[20,"description must be at least 20 characters"],
        maxlength:[2000,"description must be at most 2000 characters"]
    },
    slug:{
        type:String,
        lowercase:true,
        required:[true,"slug is required"],
    },
   imageCover:String,
    images:[String],
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[0,"price must be at least 0"]

    },
    priceAfterDescount:{
        type:Number,
        min:[0,"price must be at least 0"]

    },
    sold:Number,
    stock:{
        type:Number,
        min:[0,"stock must be at least 0"],
    },
    subCategory:{
        type:Types.ObjectId,
        ref:"SubCategory"
    },
    brand:{
        type:Types.ObjectId,
        ref:"Brand"
    },
    rateCount:{
        type:Number,
    },
    rateAvg:{
        type:Number,
        min:[1,"rate must be at least 1"],
        max:[5,"rate must be at most 5"],
    },
    createdBy:{
        type:Types.ObjectId,
        ref:"User"
    }
    
 },{
    timestamps:true,
    versionKey:false
 })


 export const Product = mongoose.model("Product",Schema);