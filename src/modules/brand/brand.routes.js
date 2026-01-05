import {Router} from "express";
import { addBrand , deleteBrand , updateBrand , getBrands , getBrand } from "./brand.controller.js";
import { uploadSignal } from "../../utils/fileUpload.js";


const brandRoutes=Router();

brandRoutes.route("/")
         .post(uploadSignal("image"),addBrand)
         .get( getBrands);


brandRoutes.route("/:id")
         .get(getBrand)
         .put(updateBrand)
         .delete(deleteBrand);

export default brandRoutes;



// testing comment with ashrqat