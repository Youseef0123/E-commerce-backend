import {Router} from "express";
import { addCategory , deleteCategory , updateCategory , getCategories , getCategory } from "./category.controller.js";
import { uploadSignal } from "../../utils/fileUpload.js";


const subCategoryRoutes=Router();


subCategoryRoutes.route("/")
         .post(uploadSignal("image"),addCategory)
         .get( getCategories);


subCategoryRoutes.route("/:id")
         .get(getCategory)
         .put(updateCategory)
         .delete(deleteCategory);

export default subCategoryRoutes;