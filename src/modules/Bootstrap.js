
import categoryRoutes from "./category/category.routes.js";
import subCategoryRoutes from "./subCategory/subCategory.routes.js";
import brandRoutes from "./brand/brand.routes.js";
export const Bootstrap =(app)=>{
    app.use("/api/v1/categories",categoryRoutes);
    app.use("/api/v1/subCategories",subCategoryRoutes);
    app.use("/api/v1/brands",brandRoutes);
}