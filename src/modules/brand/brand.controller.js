
import { Brand } from "../../../db/model/brand.model.js";
import slugify from "slugify";
import { handleAsyncError } from "../../handler/handleAsyncError.js";


const addBrand = handleAsyncError (async (req,res,next)=>{
    req.body.slug = slugify(req.body.name);
    if(req.file){
        req.body.image = req.file.filename;
    }
    let x = new Brand(req.body);
    let added = await x.save();
    res.json({message:"Brand added",data:added});
});



const getBrands = handleAsyncError (async (req,res,next)=>{
   const allBrands = await Brand.find();
  res.json({message:"all brands",data:allBrands});
});


const getBrand = handleAsyncError (async (req,res,next)=>{
   const id = req.params.id;
   const brandData = await Brand.findById(id);
   if(!brandData){
      return  res.json({message:"Brand not found",data:null});
   }
    return res.json({message:"Brand found",data:brandData});
});



const updateBrand = handleAsyncError (async (req,res,next)=>{
       if(req.body.name){
        req.body.slug = slugify(req.body.name);
       }

    const id = req.params.id;
    const updateBrandData = req.body;
    const updated =  await Brand.findByIdAndUpdate(id,updateBrandData,{new:true});
    if(!updated){
       return res.json({message:"Brand not found",data:null});
    }
    return res.json({message:"Brand updated",data:updated});
});



const deleteBrand = handleAsyncError (async (req,res,next)=>{
    const id = req.params.id;
    const deleted = await Brand.findByIdAndDelete(id);
    if(!deleted){
       return res.json({message:"Brand not found",data:null});
    }
    return res.json({message:"Brand deleted",data:deleted});
});








export{
    addBrand,
    getBrands,
    getBrand,
    updateBrand,
    deleteBrand
}