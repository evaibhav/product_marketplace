import CartController from "../controller/cartController";
import { Router } from "express";
import authenticateToken from "../middleware/authentication";

const controller = new CartController();
const cartRouter = Router();

cartRouter.post("/addToCart/:pid", authenticateToken, controller.addToCart);
cartRouter.get("/cartProducts", authenticateToken, controller.getCartProducts);
cartRouter.delete(
  "/deleteCartProducts/:pid",
  authenticateToken,
  controller.deleteCartProducts
);
cartRouter.delete(
  "/deleteMultipleCartProducts",
  authenticateToken,
  controller.deleteMultipleCartProducts
);

export default cartRouter;
