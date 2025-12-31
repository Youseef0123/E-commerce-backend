import mongoose, { Schema, Types } from "mongoose";
import dotenv from "dotenv";
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
    image:{
        type:String
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

categorySchema.post("save",function(doc){
    if(doc.image){
        doc.image=process.env.BASEURL+"uploads/"+doc.image;
    }
})

categorySchema.post("find",function(docs){
    docs.forEach(doc=>{
        if(doc.image){
            doc.image=process.env.BASEURL+"uploads/"+doc.image;
        }
    })
})

categorySchema.post("findOne",function(doc){
    if(doc && doc.image){
        doc.image=process.env.BASEURL+"uploads/"+doc.image;
    }
})

export const Category = mongoose.model("Category", categorySchema);