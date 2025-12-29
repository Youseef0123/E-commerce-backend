import {Router} from "express";
import { addSubCategory , deleteSubCategory , updateSubCategory , getSubCategories , getSubCategory } from "./subCategory.controller.js";


const subCategoryRoutes=Router();


subCategoryRoutes.route("/")
         .post(addSubCategory)
         .get( getSubCategories);


subCategoryRoutes.route("/:id")
         .get(getSubCategory)
         .put(updateSubCategory)
         .delete(deleteSubCategory);

export default subCategoryRoutes;