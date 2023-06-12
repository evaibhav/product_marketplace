import ProductController from "../controller/productController";
import { Router } from "express";
import authenticateToken from "../middleware/authentication";

const controller = new ProductController();
const productRouter = Router();

productRouter.post("/create", authenticateToken, controller.createProduct);
productRouter.put("/update/:id", controller.updateProduct);
productRouter.delete("/delete/:id", controller.deleteProduct);
productRouter.get("/getProductDetails/:id", controller.getProductDetails);
productRouter.get("/getProducts", controller.getProducts);
productRouter.get("/getProductById",authenticateToken, controller.getProductById);

export default productRouter;
