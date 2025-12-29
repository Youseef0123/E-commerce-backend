
import { Category } from "../../../db/model/category.model.js";
import slugify from "slugify";
import { handleAsyncError } from "../../handler/handleAsyncError.js";


const addCategory = handleAsyncError (async (req,res,next)=>{
    req.body.slug = slugify(req.body.name);
    let x = new Category(req.body);
    let added = await x.save();
    res.json({message:"Category added",data:added});
});



const getCategories = handleAsyncError (async (req,res,next)=>{
   const allCategories = await Category.find();
  res.json({message:"all categories",data:allCategories});
});



const getCategory = handleAsyncError (async (req,res,next)=>{
   const id = req.params.id;
   const category = await Category.findById(id);
  category ||  res.json({message:"Category not found ",data:category});
  !category && res.json({message:"Category found",data:category});
});



const updateCategory = handleAsyncError (async (req,res,next)=>{
       if(req.body.name){
        req.body.slug = slugify(req.body.name);
       }

    const id = req.params.id;
    const updateCategory = req.body;
    const updated =  await Category.findByIdAndUpdate(id,updateCategory,{new:true});
    updated || res.json({message:"Category not found",data:updated});
    !updated && res.json({message:"Category updated",data:updated});
});



const deleteCategory = handleAsyncError (async (req,res,next)=>{
    const id = req.params.id;
    const deleted = await Category.findByIdAndDelete(id);
    deleted || res.json({message:"Category not found",data:deleted});
    !deleted && res.json({message:"Category deleted",data:deleted});
});








export{
    addCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
}