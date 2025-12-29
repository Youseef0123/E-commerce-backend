import {Router} from "express";
import { addBrand , deleteBrand , updateBrand , getBrands , getBrand } from "./brand.controller.js";


const brandRoutes=Router();

brandRoutes.route("/")
         .post(addBrand)
         .get( getBrands);


brandRoutes.route("/:id")
         .get(getBrand)
         .put(updateBrand)
         .delete(deleteBrand);

export default brandRoutes;