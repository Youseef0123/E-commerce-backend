import {Router} from "express";
import { addCategory , deleteCategory , updateCategory , getCategories , getCategory } from "./category.controller.js";


const subCategoryRoutes=Router();


subCategoryRoutes.route("/")
         .post(addCategory)
         .get( getCategories);


subCategoryRoutes.route("/:id")
         .get(getCategory)
         .put(updateCategory)
         .delete(deleteCategory);

export default subCategoryRoutes;