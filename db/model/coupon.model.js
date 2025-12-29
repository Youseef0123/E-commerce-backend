import mongoose, { Types } from "mongoose";




const Schema= new mongoose.Schema({
    code:{
        type:String,
        trim:true,
        unique:[true],

    },
    expireDate:Date,
    status:{
        type:Boolean,
        enum:["active","inactive"],
        default:"active"
    },
    discount:{
        type:Number,
        min:[1,"discount must be at least 1"],
        max:[100,"discount must be at most 100"],
        required:[true,"discount is required"]

    },
    type:{
        type:String,
        enum:["prec","fixed"],
        required:[true,"type is required"],
        default:"fixed"
    }
   
},{
    timestamps:true,
    versionKey:false
})



export const Coupon = mongoose.model("Coupon",Schema);