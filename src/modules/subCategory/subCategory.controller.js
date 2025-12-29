
import slugify from "slugify";
import { subCategory } from "../../../db/model/subCategory.model.js";
import { handleAsyncError } from "../../handler/handleAsyncError.js";

const addSubCategory = handleAsyncError (async (req,res,next)=>{
    req.body.slug = slugify(req.body.name);
    let x = new subCategory(req.body);
    let added = await x.save();
    res.json({message:"Category added",data:added});
});



const getSubCategories = handleAsyncError (async (req,res,next)=>{
   const allSubCategories = await subCategory.find();
  res.json({message:"all sub categories",data:allSubCategories});
});


const getSubCategory = handleAsyncError (async (req,res,next)=>{
   const id = req.params.id;
   const foundSubCategory = await subCategory.findById(id);
   if(!foundSubCategory){
      return res.json({message:"SubCategory not found",data:null});
   }
   return res.json({message:"SubCategory found",data:foundSubCategory});
});



const updateSubCategory = handleAsyncError (async (req,res,next)=>{
       if(req.body.name){
        req.body.slug = slugify(req.body.name);
       }

    const id = req.params.id;
    const updateSubCategory = req.body;
    const updated =  await subCategory.findByIdAndUpdate(id,updateSubCategory,{new:true});
    if(!updated){
       return res.json({message:"SubCategory not found",data:null});
    }
    return res.json({message:"SubCategory updated",data:updated});
}  );


const deleteSubCategory = handleAsyncError ( async (req,res,next)=>{
    const id = req.params.id;
    const deleted = await subCategory.findByIdAndDelete(id);
    if(!deleted){
       return res.json({message:"SubCategory not found",data:null});
    }
    return res.json({message:"SubCategory deleted",data:deleted});
}  );











 
export{
    addSubCategory,
    getSubCategories,
    getSubCategory,
    updateSubCategory,
    deleteSubCategory
}