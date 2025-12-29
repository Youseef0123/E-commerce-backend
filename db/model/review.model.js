import mongoose, { Types } from "mongoose";




const Schema= new mongoose.Schema({
    comment:{
        type:String,
        trim:true,

    },
    rate:{
        type:Number,
        min:[1,"rate must be at least 1"],
        max:[5,"rate must be at most 5"],
    },
    userId:{
        type:Types.ObjectId,
        ref:"User",
    },
    productId:{
        type:Types.ObjectId,
        ref:"Product",
    }
},{
    timestamps:true,
    versionKey:false
})



export const Review = mongoose.model("Review",Schema);  