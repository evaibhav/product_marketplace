import CartController from "../controller/cartController";
import { Router } from "express";
import authenticateToken from "../middleware/authentication";

const controller = new CartController();
const cartRouter = Router();

cartRouter.post("/addToCart/:pid",authenticateToken, controller.addToCart);
cartRouter.get("/cartProducts",authenticateToken, controller.getCartProducts);

export default cartRouter;
