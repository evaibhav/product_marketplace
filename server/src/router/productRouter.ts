import ProductController from "../controller/productController";
import { Router } from "express";

const controller = new ProductController();
const userRouter = Router();

userRouter.post("/create/:uid", controller.createProduct);
userRouter.put("/update/:id", controller.updateProduct);
userRouter.delete("/delete/:id", controller.deleteProduct);
userRouter.get("/get-product/:uid", controller.getProduct);
userRouter.get("/get-products", controller.getProducts);

export default userRouter;
