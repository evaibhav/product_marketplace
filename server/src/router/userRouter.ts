import { Router } from "express";
import UserController from "../controller/userController";

const controller = new UserController();
const userRouter = Router();

userRouter.post("/register", controller.userRegister);
userRouter.post("/login", controller.userLogin);

export default userRouter;
